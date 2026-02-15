import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteEntity } from './entities';
import { ProductService } from '../product/product.service';
import { ProductListItemResponseDto } from '../product/dto';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoritesRepository: Repository<FavoriteEntity>,
    private readonly productService: ProductService,
  ) {}

  async findAll(userId: string): Promise<ProductListItemResponseDto[]> {
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
      return [];
    }

    const products = await this.productService.findProductsByIds(productIds);

    return products;
  }

  create() {
    return 'This action adds a new favorite';
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
