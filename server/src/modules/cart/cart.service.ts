import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { ProductService } from '../product/product.service';
import { ProductEntity } from '@/modules/product/entities';
import { CartEntity } from './entities';

import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { PaginationDto, TApiResponse } from '@/common';
import { AddToCartDto, UpdateCartItemDto, CartItemDto } from './dto';
import { ProductListItemDto } from '../product/dto';
import {
  TCartActionResponse,
  TCartGetCountResponse,
  TCartGetTotalItemsResponse,
  TCartItemsIdsResponse,
  TCartPaginatedResponse,
  TCartTotalPriceResponse,
} from './types';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly productService: ProductService,
  ) {}

  async findAll(
    userId: string,
    paginationDto: PaginationDto,
  ): Promise<TCartPaginatedResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [cartItems, total] = await this.cartRepository.findAndCount({
      where: { userId },
      select: {
        productId: true,
        count: true,
        isSelected: true,
        createdAt: true,
        updatedAt: true,
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    if (!cartItems.length) {
      return ApiPaginatedResponse.success([], 0, page, limit, 'Корзина пуста');
    }

    const productIds = cartItems.map((item) => item.productId);
    const { data } = await this.productService.findProductsByIds(
      productIds,
      paginationDto,
    );

    const items = this.mapCartItemsToDto(cartItems, data.items);

    const { data: totalPrice = 0 } = await this.getTotalPrice(userId);

    return ApiPaginatedResponse.success(
      items,
      total,
      page,
      limit,
      'Список товаров в корзине успешно получен',
      { totalPrice },
    );
  }

  async getCartItemsIds(userId: string): Promise<TCartItemsIdsResponse> {
    const cartItems = await this.cartRepository.find({
      where: { userId },
      select: ['productId'],
      order: { createdAt: 'DESC' },
    });

    return ApiResponse.success(cartItems.map((c) => c.productId));
  }

  async addToCart(
    userId: string,
    productId: string,
    dto: AddToCartDto,
  ): Promise<TCartActionResponse> {
    // Проверяем существование товара
    const exists = await this.productService.exists(productId);
    if (!exists) {
      throw new NotFoundException('Товар не найден!');
    }

    const existingItem = await this.cartRepository.findOne({
      where: { userId, productId },
    });

    if (existingItem) {
      existingItem.count += dto.count || 1;
      await this.cartRepository.save(existingItem);

      return ApiResponse.success(
        {
          productId: existingItem.productId,
          count: existingItem.count,
        },
        'Количество товара в корзине обновлено',
      );
    }

    const cartItem = this.cartRepository.create({
      userId,
      productId,
      count: dto.count || 1,
      isSelected: false,
    });

    await this.cartRepository.save(cartItem);

    return ApiResponse.success(
      {
        productId: cartItem.productId,
        count: cartItem.count,
      },
      'Товар успешно добавлен в корзину',
    );
  }

  async updateCount(
    userId: string,
    productId: string,
    dto: UpdateCartItemDto,
  ): Promise<TCartActionResponse> {
    const cartItem = await this.cartRepository.findOne({
      where: { userId, productId },
    });

    if (!cartItem) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    if (dto.count < 1) {
      throw new BadRequestException('Количество должно быть не меньше 1');
    }

    cartItem.count = dto.count;
    await this.cartRepository.save(cartItem);

    return ApiResponse.success(
      {
        productId: cartItem.productId,
        count: cartItem.count,
      },
      'Количество товара обновлено',
    );
  }

  async removeFromCart(
    userId: string,
    productId: string,
  ): Promise<TApiResponse> {
    const cartItem = await this.cartRepository.findOne({
      where: { userId, productId },
    });

    if (!cartItem) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    await this.cartRepository.remove(cartItem);

    return ApiResponse.deleted('Товар успешно удален из корзины');
  }

  async toggleSelectedProduct(
    userId: string,
    productId: string,
    isSelected: boolean,
  ) {
    const cartItem = await this.cartRepository.findOne({
      where: { userId, productId },
    });

    if (!cartItem) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    cartItem.isSelected = isSelected;
    await this.cartRepository.save(cartItem);

    return ApiResponse.success(
      isSelected,
      isSelected ? 'Товар корзины выбран' : 'Товар корзины убран из выбранных',
    );
  }

  async selectAllCartItems(userId: string, isSelected: boolean) {
    await this.cartRepository.update(
      { userId },
      {
        isSelected,
      },
    );

    return ApiResponse.success(
      isSelected,
      isSelected
        ? 'Все товары корзины добавлены в выбранные'
        : 'Все товары корзины убраны из выбранных',
    );
  }

  async clearCart(userId: string): Promise<TApiResponse> {
    await this.cartRepository.delete({ userId, isSelected: true });
    return ApiResponse.deleted('Корзина успешно очищена');
  }

  async getCount(
    userId: string,
    isSelected: boolean = false,
  ): Promise<TCartGetCountResponse> {
    let count = 0;

    if (isSelected) {
      count = await this.cartRepository.count({
        where: { userId, isSelected },
      });
    } else {
      count = await this.cartRepository.count({
        where: { userId },
      });
    }

    return ApiResponse.success(count, 'Количество товаров в корзине');
  }

  async getTotalItems(userId: string): Promise<TCartGetTotalItemsResponse> {
    const items = await this.cartRepository.find({
      where: { userId, isSelected: true },
      select: ['count'],
    });

    const totalItems = items.reduce((sum, item) => sum + item.count, 0);

    return ApiResponse.success(
      totalItems,
      'Общее количество товаров в корзине',
    );
  }

  async getTotalPrice(
    userId: string,
    isSelected: boolean = false,
  ): Promise<TCartTotalPriceResponse> {
    let cartItems: CartEntity[] = [];

    if (isSelected) {
      cartItems = await this.cartRepository.find({
        where: { userId, isSelected },
      });
    } else {
      cartItems = await this.cartRepository.find({
        where: { userId },
      });
    }

    const totalPrice = await this.calculateTotalPrice(cartItems);

    return ApiResponse.success(totalPrice, 'Общая стоимость товаров');
  }

  protected mapCartItemsToDto(
    cartItems: CartEntity[],
    products: ProductListItemDto[],
  ): CartItemDto[] {
    const items: CartItemDto[] = [];

    for (const cartItem of cartItems) {
      const product = products.find((p) => p.id === cartItem.productId);

      if (product) {
        items.push({
          count: cartItem.count,
          product,
          isSelected: cartItem.isSelected,
          createdAt: cartItem.createdAt,
          updatedAt: cartItem.updatedAt,
        });
      }
    }

    return items;
  }

  private async calculateTotalPrice(items: CartEntity[]): Promise<number> {
    if (!items.length) return 0;

    const productIds = items.map((item) => item.productId);

    const products = await this.productRepository.find({
      where: { id: In(productIds) },
      select: { id: true, price: true },
    });

    return items.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product?.price || 0) * item.count;
    }, 0);
  }
}
