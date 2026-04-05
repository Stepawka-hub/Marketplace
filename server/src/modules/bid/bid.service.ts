import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { UserService } from '@/modules/user/user.service';
import { LotEntity } from '@/modules/lot/entities';
import { BidEntity } from './entities';

import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { PaginationDto } from '@/common';
import { CreateBidDto } from './dto';
import { TBidActionResponse, TBidPaginatedResponse } from './types';

@Injectable()
export class BidService {
  constructor(
    @InjectRepository(BidEntity)
    private readonly bidRepository: Repository<BidEntity>,
    @InjectRepository(LotEntity)
    private readonly lotRepository: Repository<LotEntity>,
    private readonly userService: UserService,
  ) {}

  async getLotBids(
    lotId: string,
    paginationDto: PaginationDto,
  ): Promise<TBidPaginatedResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [bids, total] = await this.bidRepository.findAndCount({
      where: { lotId },
      relations: ['user'],
      order: { amount: 'DESC', createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      bids,
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
  ): Promise<TBidActionResponse> {
    const lot = await this.lotRepository.findOne({
      where: { id: lotId },
      relations: ['bids'],
    });

    if (!lot) {
      throw new NotFoundException('Lot not found');
    }

    if (lot.status !== 'ACTIVE') {
      throw new BadRequestException('Auction is not active');
    }

    if (new Date() > lot.endTime) {
      throw new BadRequestException('The auction has already ended');
    }

    const minBid = lot.currentPrice + lot.minBidIncrement;
    if (dto.amount < minBid) {
      throw new BadRequestException(`Minimum bid: ${minBid} ₽`);
    }

    const user = await this.userService.findById(userId);
    const availableBalance = user.balance - user.frozenBalance;

    if (availableBalance < dto.amount) {
      throw new BadRequestException('Insufficient funds to place a bet');
    }

    // Замораживаем деньги
    await this.userService.updateFrozenBalance(userId, dto.amount, 'freeze');

    // Создаём ставку
    const bid = this.bidRepository.create({
      userId,
      lotId,
      amount: dto.amount,
      status: 'ACTIVE',
    });
    await this.bidRepository.save(bid);

    // Обновляем предыдущие ставки пользователя
    const previousBids = await this.bidRepository.find({
      where: { lotId, userId, status: 'ACTIVE' },
      order: { createdAt: 'DESC' },
    });

    for (const prevBid of previousBids) {
      if (prevBid.id !== bid.id) {
        prevBid.status = 'OUTBID';
        await this.bidRepository.save(prevBid);
        await this.userService.updateFrozenBalance(
          userId,
          -prevBid.amount,
          'unfreeze',
        );
      }
    }

    // Обновляем лот
    lot.currentPrice = dto.amount;
    lot.currentWinnerId = userId;
    await this.lotRepository.save(lot);

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
}
