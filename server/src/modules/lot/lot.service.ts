import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, MoreThan } from 'typeorm';

import { ProductService } from '@/modules/product/product.service';
import { BidEntity } from '@/modules/bid/entities';
import { LotEntity } from './entities';
import { CreateLotDto, LotListItemDto, UpdateLotDto } from './dto';

import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { PaginationDto } from '@/common';
import { TApiPaginatedResponse, TApiResponse } from '@/common';
import { LOT_STATUSES } from './constants';
import { LotMapper } from './mappers';
import { StorageService } from '../storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LotService {
  private readonly baseUrl: string;
  public readonly lotMapper: LotMapper;

  constructor(
    @InjectRepository(LotEntity)
    private readonly lotRepository: Repository<LotEntity>,
    @InjectRepository(BidEntity)
    private readonly bidRepository: Repository<BidEntity>,
    private readonly productService: ProductService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    const domain = this.configService.getOrThrow<string>('S3_PUBLIC_DOMAIN');
    this.baseUrl = domain.endsWith('/') ? domain : domain + '/';

    this.lotMapper = new LotMapper(this.baseUrl);
  }

  async getLots(
    paginationDto: PaginationDto,
    status?: string,
    category?: string,
  ): Promise<TApiPaginatedResponse<LotListItemDto>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [lots, total] = await this.lotRepository.findAndCount({
      relations: {
        product: {
          media: true,
          seller: true,
        },
      },
      select: {
        id: true,
        startPrice: true,
        minBidIncrement: true,
        startTime: true,
        endTime: true,
        status: true,
        currentPrice: true,
        createdAt: true,
        updatedAt: true,
        product: {
          id: true,
          name: true,
          shortDescription: true,
          category: true,
          createdAt: true,
          updatedAt: true,
          media: {
            id: true,
            filename: true,
            isPreview: true,
          },
          seller: {
            id: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      order: {
        endTime: 'ASC',
      },
      skip,
      take: limit,
    });

    const lotDtos = this.lotMapper.toListItemArray(lots);

    return ApiPaginatedResponse.success(
      lotDtos,
      total,
      page,
      limit,
      'Лоты успешно получены',
    );
  }

  async getLotById(id: string): Promise<TApiResponse<LotEntity>> {
    const lot = await this.lotRepository.findOne({
      where: { id },
      relations: [
        'product',
        'product.media',
        'seller',
        'currentWinner',
        'bids',
        'bids.user',
      ],
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    return ApiResponse.success(lot, 'Лот успешно получен');
  }

  async getMyLots(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<LotEntity>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [lots, total] = await this.lotRepository.findAndCount({
      where: { sellerId: userId },
      relations: ['product', 'product.media'],
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      lots,
      total,
      page,
      limit,
      'Мои лоты успешно получены',
    );
  }

  async createLot(
    userId: string,
    dto: CreateLotDto,
  ): Promise<TApiResponse<LotEntity>> {
    const { productId, endTime } = dto;
    const productExists = await this.productService.exists(productId);

    if (!productExists) {
      throw new NotFoundException('Product not found');
    }

    const now = new Date();
    const startTime = new Date();

    if (endTime <= now) {
      throw new BadRequestException('End time must be in the future');
    }

    const minEndTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    if (endTime < minEndTime) {
      throw new BadRequestException('Auction must last at least 24 hours');
    }

    const maxEndTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    if (endTime > maxEndTime) {
      throw new BadRequestException('Auction cannot last more than 7 days');
    }

    const lot = this.lotRepository.create({
      ...dto,
      sellerId: userId,
      startTime,
      currentPrice: dto.startPrice,
      status: LOT_STATUSES.ACTIVE,
    });

    await this.lotRepository.save(lot);

    return ApiResponse.success(lot, 'Лот успешно создан');
  }

  async updateLot(
    userId: string,
    lotId: string,
    dto: UpdateLotDto,
  ): Promise<TApiResponse<LotEntity>> {
    const lot = await this.lotRepository.findOne({
      where: { id: lotId, sellerId: userId },
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    if (lot.status !== LOT_STATUSES.DRAFT) {
      throw new BadRequestException('Нельзя редактировать активный лот');
    }

    Object.assign(lot, dto);

    if (dto.startPrice !== undefined) {
      lot.currentPrice = dto.startPrice;
    }

    await this.lotRepository.save(lot);

    return ApiResponse.success(lot, 'Лот успешно обновлён');
  }

  async deleteLot(userId: string, lotId: string): Promise<TApiResponse<null>> {
    const lot = await this.lotRepository.findOne({
      where: { id: lotId, sellerId: userId },
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    if (lot.status !== LOT_STATUSES.DRAFT) {
      throw new BadRequestException('Нельзя удалить активный лот');
    }

    await this.lotRepository.remove(lot);

    return ApiResponse.success(null, 'Лот успешно удалён');
  }

  async getMyActiveLots(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<any>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const userBids = await this.bidRepository.find({
      where: { userId },
      select: ['lotId'],
    });

    const lotIds = [...new Set(userBids.map((b) => b.lotId))];

    if (lotIds.length === 0) {
      return ApiPaginatedResponse.success(
        [],
        0,
        page,
        limit,
        'Нет активных ставок',
      );
    }

    const [lots, total] = await this.lotRepository.findAndCount({
      where: {
        id: In(lotIds),
        status: LOT_STATUSES.ACTIVE,
        endTime: MoreThan(new Date()),
      },
      relations: ['product', 'product.media', 'bids'],
      order: { endTime: 'ASC' },
      skip,
      take: limit,
    });

    const items = lots.map((lot) => {
      const userBidsOnLot = lot.bids?.filter((b) => b.userId === userId) || [];
      const yourMaxBid = userBidsOnLot.reduce(
        (max, b) => Math.max(max, b.amount),
        0,
      );
      const highestBid =
        lot.bids?.reduce((max, b) => Math.max(max, b.amount), 0) ||
        lot.currentPrice;

      return {
        id: lot.id,
        product: lot.product,
        currentPrice: lot.currentPrice,
        yourBid: yourMaxBid,
        endTime: lot.endTime,
        isLeading: yourMaxBid === highestBid,
        yourBidsCount: userBidsOnLot.length,
      };
    });

    return ApiPaginatedResponse.success(
      items,
      total,
      page,
      limit,
      'Активные лоты успешно получены',
    );
  }

  async getMyActiveLotsCount(userId: string): Promise<TApiResponse<number>> {
    const userBids = await this.bidRepository.find({
      where: { userId },
      select: ['lotId'],
    });

    const lotIds = [...new Set(userBids.map((b) => b.lotId))];

    if (lotIds.length === 0) {
      return ApiResponse.success(0, 'Количество активных ставок получено');
    }

    const count = await this.lotRepository.count({
      where: {
        id: In(lotIds),
        status: LOT_STATUSES.ACTIVE,
        endTime: MoreThan(new Date()),
      },
    });

    return ApiResponse.success(count, 'Количество активных ставок получено');
  }

  async getMyBidsHistory(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<any>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const userBids = await this.bidRepository.find({
      where: { userId },
      select: ['lotId'],
    });

    const lotIds = [...new Set(userBids.map((b) => b.lotId))];

    if (lotIds.length === 0) {
      return ApiPaginatedResponse.success(
        [],
        0,
        page,
        limit,
        'История ставок пуста',
      );
    }

    const [lots, total] = await this.lotRepository.findAndCount({
      where: {
        id: In(lotIds),
        status: In([
          LOT_STATUSES.COMPLETED,
          LOT_STATUSES.EXPIRED,
          LOT_STATUSES.CANCELLED,
        ]),
      },
      relations: ['product', 'product.media', 'bids', 'winner'],
      order: { updatedAt: 'DESC' },
      skip,
      take: limit,
    });

    const items = lots.map((lot) => {
      const userBidsOnLot = lot.bids?.filter((b) => b.userId === userId) || [];
      const yourLastBid =
        userBidsOnLot.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        )[0]?.amount || 0;

      const isWinner = lot.winner?.id === userId;
      let result: 'WINNING' | 'LOST' | 'EXPIRED' = 'LOST';

      if (isWinner) {
        result = 'WINNING';
      } else if (lot.status === LOT_STATUSES.EXPIRED) {
        result = 'EXPIRED';
      }

      return {
        id: lot.id,
        product: lot.product,
        finalPrice: lot.currentPrice,
        yourLastBid,
        result,
        endedAt: lot.updatedAt,
        yourBidsCount: userBidsOnLot.length,
      };
    });

    return ApiPaginatedResponse.success(
      items,
      total,
      page,
      limit,
      'История ставок успешно получена',
    );
  }

  async findById(id: string): Promise<LotEntity> {
    const lot = await this.lotRepository.findOne({
      where: { id },
      relations: ['bids'],
    });

    if (!lot) {
      throw new NotFoundException('Лот не найден');
    }

    return lot;
  }
}
