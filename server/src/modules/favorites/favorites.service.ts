import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FavoriteEntity } from './entities';
import { ProductService } from '../product/product.service';
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
    private readonly productService: ProductService,
  ) {}

  async findAll(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TFavoritesPaginatedResponse> {
    const favorites = await this.favoritesRepository.find({
      where: { userId },
      select: {
        productId: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });

    const productIds = favorites.map((f) => f.productId);

    if (!productIds.length) {
      return ApiPaginatedResponse.success(
        [],
        0,
        paginationDto.page || 1,
        paginationDto.limit || 10,
        'Список избранных товаров пуст',
      );
    }

    const { data } = await this.productService.findProductsByIds(
      productIds,
      paginationDto,
    );

    return ApiPaginatedResponse.success(
      data.items,
      data.meta.total,
      data.meta.page,
      data.meta.limit,
      'Список избранных товаров успешно получен',
    );
  }

  async create(
    userId: string,
    productId: string,
  ): Promise<TFavoritesActionResponse> {
    const existingFavorite = await this.favoritesRepository.findOne({
      where: {
        userId,
        productId,
      },
    });

    // Если товар уже в избранном, выбрасываем исключение
    if (existingFavorite) {
      throw new ConflictException('Товар уже находится в избранном!');
    }

    const favoriteProduct = this.favoritesRepository.create({
      userId,
      productId,
    });

    await this.favoritesRepository.save(favoriteProduct);

    return ApiResponse.created(productId, 'Товар успешно добавлен в избранное');
  }

  async remove(userId: string, productId: string): Promise<TApiResponse> {
    const favoriteProduct = await this.favoritesRepository.findOne({
      where: {
        userId,
        productId,
      },
    });

    if (!favoriteProduct) {
      throw new NotFoundException('Товар не найден в избранном!');
    }

    await this.favoritesRepository.remove(favoriteProduct);

    return ApiResponse.deleted(
      `Товар #${productId} успешно удален из избранного`,
    );
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
      select: ['productId'],
      order: { createdAt: 'DESC' },
    });

    return ApiResponse.success(favorites.map((f) => f.productId));
  }
}
