import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserService } from '@/modules/user/user.service';
import { LotEntity } from '@/modules/lot/entities';
import { AutoBidEntity, BidEntity } from './entities';
import { StorageService } from '../storage';

import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { PaginationDto } from '@/common';
import { CreateBidDto } from './dto';
import { LOT_STATUSES } from '../lot/constants';
import { BID_STATUSES } from './constants';
import { TBidActionResponse, TBidPaginatedResponse } from './types';
import { BidMapper } from './mappers';
import { BALANCE_ACTIONS } from '../user/constants';

@Injectable()
export class BidService {
  private readonly baseUrl: string;
  private readonly bidMapper: BidMapper;

  constructor(
    @InjectRepository(BidEntity)
    private readonly bidRepository: Repository<BidEntity>,
    @InjectRepository(AutoBidEntity)
    private readonly autoBidRepository: Repository<AutoBidEntity>,
    @InjectRepository(LotEntity)
    private readonly lotRepository: Repository<LotEntity>,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    const domain = this.configService.getOrThrow<string>('S3_PUBLIC_DOMAIN');
    this.baseUrl = domain.endsWith('/') ? domain : domain + '/';

    this.bidMapper = new BidMapper(this.baseUrl);
  }

  async getLotBids(
    lotId: string,
    paginationDto: PaginationDto,
  ): Promise<TBidPaginatedResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [bids, total] = await this.bidRepository.findAndCount({
      where: { lotId },
      relations: ['user'],
      select: {
        id: true,
        amount: true,
        status: true,
        user: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
        createdAt: true,
      },
      order: {
        amount: 'DESC',
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      this.bidMapper.toDetailsArray(bids),
      total,
      page,
      limit,
      'Ставки лота успешно получены',
    );
  }

  async placeBid(
    userId: string,
    lotId: string,
    dto: CreateBidDto,
    isAutoBid: boolean = false,
  ): Promise<TBidActionResponse> {
    const lot = await this.lotRepository.findOne({
      where: {
        id: lotId,
      },
      relations: ['bids'],
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    if (lot.status !== LOT_STATUSES.ACTIVE) {
      throw new BadRequestException('Аукцион не активен');
    }

    if (new Date() > lot.endTime) {
      throw new BadRequestException('Аукцион уже завершён');
    }

    const minBid = lot.currentPrice + lot.minBidIncrement;

    if (dto.amount < minBid) {
      throw new BadRequestException(`Минимальная ставка: ${minBid} ₽`);
    }

    const user = await this.userService.findById(userId);
    const availableBalance = user.balance - user.frozenBalance;

    if (availableBalance < dto.amount) {
      throw new BadRequestException(
        'Недостаточно средств, чтобы сделать ставку',
      );
    }

    // Размораживаем баланс старого лидера
    const oldWinnerId = lot.currentWinnerId;
    if (oldWinnerId && oldWinnerId !== userId) {
      const oldWinnerBid = lot.bids?.find(
        (b) => b.userId === oldWinnerId && b.status === BID_STATUSES.ACTIVE,
      );

      if (oldWinnerBid) {
        await this.userService.updateFrozenBalance(
          oldWinnerId,
          oldWinnerBid.amount,
          BALANCE_ACTIONS.UNFREEZE,
        );
        oldWinnerBid.status = BID_STATUSES.OUTBID;
        await this.bidRepository.save(oldWinnerBid);
      }
    }

    // Замораживаем баланс нового лидера
    await this.userService.updateFrozenBalance(
      userId,
      dto.amount,
      BALANCE_ACTIONS.FREEZE,
    );

    // Создаём ставку
    const bid = this.bidRepository.create({
      userId,
      lotId,
      amount: dto.amount,
      status: BID_STATUSES.ACTIVE,
    });
    await this.bidRepository.save(bid);

    // Обновляем лот
    await this.lotRepository.update(lotId, {
      currentPrice: dto.amount,
      currentWinnerId: userId,
    });

    if (!isAutoBid && oldWinnerId && oldWinnerId !== userId) {
      await this.tryTriggerAutoBid(lotId, oldWinnerId, dto.amount);
    }

    return ApiResponse.success(
      {
        id: bid.id,
        lotId: bid.lotId,
        amount: bid.amount,
        status: bid.status,
      },
      'Ставка успешно сделана',
    );
  }

  private async tryTriggerAutoBid(
    lotId: string,
    oldWinnerId: string,
    newBidAmount: number,
  ) {
    const autoBid = await this.autoBidRepository.findOne({
      where: {
        userId: oldWinnerId,
        lotId,
        active: true,
      },
    });

    if (!autoBid) {
      return;
    }

    const lot = await this.lotRepository.findOne({
      where: {
        id: lotId,
      },
    });

    if (!lot) {
      return;
    }

    const minStep = lot.minBidIncrement;
    const nextAmount = newBidAmount + minStep;

    // Достигнут лимит - отключаем автоставку
    if (nextAmount > autoBid.maxAmount) {
      autoBid.active = false;
      await this.autoBidRepository.save(autoBid);
      return;
    }

    // Проверяем баланс, если не хватает денег - отключаем автоставку
    const user = await this.userService.findById(oldWinnerId);
    if (user.balance - user.frozenBalance < nextAmount) {
      autoBid.active = false;
      await this.autoBidRepository.save(autoBid);
      return;
    }

    // Ставим автоставку
    await this.placeBid(
      oldWinnerId,
      lotId,
      {
        amount: nextAmount,
      },
      true,
    );
  }

  async enableAutoBid(userId: string, lotId: string, maxAmount: number) {
    const lot = await this.lotRepository.findOne({
      where: { id: lotId },
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    if (lot.currentWinnerId !== userId) {
      throw new BadRequestException('Только лидер может включать автоставку');
    }

    const nextAmount = lot.currentPrice + lot.minBidIncrement;

    if (nextAmount > maxAmount) {
      throw new BadRequestException(
        'Максимальная ставка слишком мала для следующей ставки',
      );
    }

    // Ставим ставку
    await this.placeBid(
      userId,
      lotId,
      {
        amount: nextAmount,
      },
      true,
    );

    // Сохраняем автоставку
    const autoBid = this.autoBidRepository.create({
      userId,
      lotId,
      maxAmount,
    });
    await this.autoBidRepository.save(autoBid);

    return ApiResponse.success(autoBid, 'Auto bid enabled');
  }

  // Удаление автоставки
  async deleteAutoBid(userId: string, lotId: string) {
    const autoBid = await this.autoBidRepository.findOne({
      where: {
        userId,
        lotId,
        active: true,
      },
    });

    if (autoBid) {
      autoBid.active = false;
      await this.autoBidRepository.save(autoBid);
    }

    return ApiResponse.success(null, 'Автоставка отключена');
  }

  async getUserAutoBid(userId: string, lotId: string) {
    const autoBid = await this.autoBidRepository.findOne({
      where: {
        userId,
        lotId,
        active: true,
      },
    });

    return ApiResponse.success(autoBid || null, 'Автоставка получена');
  }
}
