import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, MoreThan } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { ProductService } from '@/modules/product/product.service';
import { StorageService } from '@/modules/storage';
import { BidEntity } from '@/modules/bid/entities';
import { LotMapper } from './mappers';
import { LotEntity } from './entities';
import { CreateLotDto, LotDetailsDto, LotListItemDto } from './dto';

import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { PaginationDto, TApiPaginatedResponse, TApiResponse } from '@/common';
import { LOT_STATUSES } from './constants';
import { TBidLotItem } from './types';

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

  async getLotById(id: string): Promise<TApiResponse<LotDetailsDto>> {
    const lot = await this.lotRepository.findOne({
      where: { id },
      relations: {
        product: {
          media: true,
          seller: true,
        },
        seller: true,
        currentWinner: true,
        bids: {
          user: true,
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
          description: true,
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
        seller: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
        currentWinner: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
        bids: {
          id: true,
          amount: true,
          createdAt: true,
          user: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!lot) {
      throw new NotFoundException('Lot not found');
    }

    const lotDto = this.lotMapper.toDetails(lot);

    return ApiResponse.success(lotDto, 'Лот успешно получен');
  }

  async getMyLots(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<LotListItemDto>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [lots, total] = await this.lotRepository.findAndCount({
      where: { sellerId: userId },
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
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    const lotDtos = this.lotMapper.toListItemArray(lots);

    return ApiPaginatedResponse.success(
      lotDtos,
      total,
      page,
      limit,
      'Мои лоты успешно получены',
    );
  }

  async findLotsByIds(
    lotIds: string[],
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<LotListItemDto>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [lots, total] = await this.lotRepository.findAndCount({
      where: { id: In(lotIds) },
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
      order: { createdAt: 'DESC' },
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

  async getMyActiveLots(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TApiPaginatedResponse<TBidLotItem>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const lotIds = await this.getUserLotIds(userId);

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

    const items = lots.map((lot) => this.lotMapper.toBidLotItem(lot, userId));

    return ApiPaginatedResponse.success(
      items,
      total,
      page,
      limit,
      'Активные лоты успешно получены',
    );
  }

  async getMyActiveLotsCount(userId: string): Promise<TApiResponse<number>> {
    const lotIds = await this.getUserLotIds(userId);

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
  ): Promise<TApiPaginatedResponse<TBidLotItem>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const lotIds = await this.getUserLotIds(userId);

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
        status: In([LOT_STATUSES.COMPLETED, LOT_STATUSES.EXPIRED]),
      },
      relations: ['product', 'product.media', 'bids'],
      order: { updatedAt: 'DESC' },
      skip,
      take: limit,
    });

    const items = lots.map((lot) => this.lotMapper.toBidLotItem(lot, userId));

    return ApiPaginatedResponse.success(
      items,
      total,
      page,
      limit,
      'История ставок успешно получена',
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

  private async getUserLotIds(userId: string): Promise<string[]> {
    const userBids = await this.bidRepository.find({
      where: { userId },
      select: ['lotId'],
    });

    return [...new Set(userBids.map((b) => b.lotId))];
  }
}
