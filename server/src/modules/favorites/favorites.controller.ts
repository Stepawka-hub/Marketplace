import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { Authorizated, Authorization } from '../auth/decorators';
import { ProductListItemDto } from '../product/dto';
import {
  FavoritesListResponseDto,
  RemoveFavoriteResponseDto,
  CreateFavoriteResponseDto,
  FavoritesCountResponseDto,
  FavoriteIdsResponseDto,
} from './dto';
import { TApiResponse } from '@/common';
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @ApiOperation({
    summary: 'Получение избранных товаров пользователя',
    description:
      'Проверяет авторизован ли пользователь и возвращает список избранных товаров',
  })
  @ApiOkResponse({
    description: 'Список избранных товаров успешно получен',
    type: FavoritesListResponseDto,
  })
  @Authorization()
  @Get()
  findAll(
    @Authorizated('id') userId: string,
  ): Promise<TApiResponse<ProductListItemDto[]>> {
    return this.favoritesService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Добавление товара в избранное',
    description:
      'Проверяет авторизован ли пользователь и добавляет товар в избранное',
  })
  @ApiOkResponse({
    description: 'Товар успешно добавлен в избранное',
    type: CreateFavoriteResponseDto,
  })
  @Authorization()
  @Post(':productId')
  create(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.favoritesService.create(userId, productId);
  }

  @ApiOperation({
    summary: 'Удаление товара из избранного',
    description:
      'Проверяет авторизован ли пользователь и убирает товар из избранного',
  })
  @ApiOkResponse({
    description: 'Товар успешно удалён из избранного',
    type: RemoveFavoriteResponseDto,
  })
  @Authorization()
  @Delete(':productId')
  remove(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.favoritesService.remove(userId, productId);
  }

  @ApiOperation({
    summary: 'Получение количества избранных товаров',
    description:
      'Проверяет авторизован ли пользователь и возвращает количество избранных товаров',
  })
  @ApiOkResponse({
    description: 'Количество избранных товаров',
    type: FavoritesCountResponseDto,
  })
  @Authorization()
  @Get('count')
  getCount(@Authorizated('id') userId: string) {
    return this.favoritesService.getCount(userId);
  }

  @ApiOperation({
    summary: 'Получение списка ID избранных товаров',
    description:
      'Проверяет авторизован ли пользователь и возвращает список ID избранных товаров',
  })
  @ApiOkResponse({
    description: 'Список ID избранных товаров',
    type: FavoriteIdsResponseDto,
  })
  @Authorization()
  @Get('ids')
  async getFavoriteIds(@Authorizated('id') userId: string) {
    return this.favoritesService.getFavoriteIds(userId);
  }
}
