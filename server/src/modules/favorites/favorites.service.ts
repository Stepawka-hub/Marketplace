import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteEntity } from './entities';
import { ProductService } from '../product/product.service';
import { ApiResponse } from '@/common/helpers';
import { ProductListItemDto } from '../product/dto';
import { TApiResponse } from '@/common';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoritesRepository: Repository<FavoriteEntity>,
    private readonly productService: ProductService,
  ) {}

  async findAll(userId: string): Promise<TApiResponse<ProductListItemDto[]>> {
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
      return ApiResponse.success([]);
    }

    const { data = [] } =
      await this.productService.findProductsByIds(productIds);

    return ApiResponse.success(data);
  }

  async create(
    userId: string,
    productId: string,
  ): Promise<TApiResponse<string>> {
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

  async getCount(userId: string): Promise<TApiResponse<number>> {
    const count = await this.favoritesRepository.count({
      where: { userId },
    });

    return ApiResponse.success(count);
  }

  async getFavoriteIds(userId: string): Promise<TApiResponse<string[]>> {
    const favorites = await this.favoritesRepository.find({
      where: { userId },
      select: ['productId'],
      order: { createdAt: 'DESC' },
    });

    return ApiResponse.success(favorites.map((f) => f.productId));
  }
}
