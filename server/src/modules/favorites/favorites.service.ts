import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteEntity } from './entities';
import { ProductService } from '../product/product.service';
import { ProductListItemResponseDto } from '../product/dto';
import { TApiResponse } from '@/common';
import { ApiResponse } from '@/common/helpers';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoritesRepository: Repository<FavoriteEntity>,
    private readonly productService: ProductService,
  ) {}

  async findAll(
    userId: string,
  ): Promise<TApiResponse<ProductListItemResponseDto[]>> {
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

    // Поиск и возврат созданного товара
    const createdFavoriteProduct = await this.favoritesRepository.findOne({
      where: { productId },
      select: {
        productId: true,
      },
    });

    if (!createdFavoriteProduct) {
      throw new NotFoundException('Избранный товар не найден!');
    }

    return ApiResponse.created(
      createdFavoriteProduct.productId,
      'Товар успешно добавлен в избранное',
    );
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
}
