import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FavoriteEntity } from './entities';
import { LotService } from '../lot/lot.service';
import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';

import { TApiResponse, PaginationDto } from '@/common';
import {
  TFavoritesActionResponse,
  TFavoritesCountResponse,
  TFavoritesIdsResponse,
  TFavoritesPaginatedResponse,
} from './types';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoritesRepository: Repository<FavoriteEntity>,
    private readonly lotService: LotService,
  ) {}

  async findAll(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TFavoritesPaginatedResponse> {
    const favorites = await this.favoritesRepository.find({
      where: { userId },
      select: {
        lotId: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });

    const lotIds = favorites.map((f) => f.lotId);

    if (!lotIds.length) {
      return ApiPaginatedResponse.success(
        [],
        0,
        paginationDto.page || 1,
        paginationDto.limit || 10,
        'Список избранных лотов пуст',
      );
    }

    const { data } = await this.lotService.findLotsByIds(lotIds, paginationDto);

    return ApiPaginatedResponse.success(
      data.items,
      data.meta.total,
      data.meta.page,
      data.meta.limit,
      'Список избранных лотов успешно получен',
    );
  }

  async create(
    userId: string,
    lotId: string,
  ): Promise<TFavoritesActionResponse> {
    const existingFavorite = await this.favoritesRepository.findOne({
      where: {
        userId,
        lotId,
      },
    });

    if (existingFavorite) {
      throw new ConflictException('Лот уже находится в избранном!');
    }

    const favoriteLot = this.favoritesRepository.create({
      userId,
      lotId,
    });

    await this.favoritesRepository.save(favoriteLot);

    return ApiResponse.created(lotId, 'Лот успешно добавлен в избранное');
  }

  async remove(userId: string, lotId: string): Promise<TApiResponse> {
    const favoriteLot = await this.favoritesRepository.findOne({
      where: {
        userId,
        lotId,
      },
    });

    if (!favoriteLot) {
      throw new NotFoundException('Лот не найден в избранном!');
    }

    await this.favoritesRepository.remove(favoriteLot);

    return ApiResponse.deleted(`Лот #${lotId} успешно удален из избранного`);
  }

  async getCount(userId: string): Promise<TFavoritesCountResponse> {
    const count = await this.favoritesRepository.count({
      where: { userId },
    });

    return ApiResponse.success(count);
  }

  async getFavoriteIds(userId: string): Promise<TFavoritesIdsResponse> {
    const favorites = await this.favoritesRepository.find({
      where: { userId },
      select: ['lotId'],
      order: { createdAt: 'DESC' },
    });

    return ApiResponse.success(favorites.map((f) => f.lotId));
  }
}
