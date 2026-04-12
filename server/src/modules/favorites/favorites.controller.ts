import { Controller, Get, Post, Param, Delete, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { Authorizated, Authorization } from '../auth/decorators';
import {
  FavoritesListResponseDto,
  RemoveFavoriteResponseDto,
  CreateFavoriteResponseDto,
  FavoritesCountResponseDto,
  FavoriteIdsResponseDto,
} from './dto';
import { PaginationDto } from '@/common';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @ApiOperation({
    summary: 'Получение избранных лотов пользователя',
    description:
      'Проверяет авторизован ли пользователь и возвращает список избранных лотов',
  })
  @ApiOkResponse({
    description: 'Список избранных лотов успешно получен',
    type: FavoritesListResponseDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @Authorization()
  @Get()
  findAll(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.favoritesService.findAll(userId, paginationDto);
  }

  @ApiOperation({
    summary: 'Добавление лота в избранное',
    description:
      'Проверяет авторизован ли пользователь и добавляет лот в избранное',
  })
  @ApiOkResponse({
    description: 'Лот успешно добавлен в избранное',
    type: CreateFavoriteResponseDto,
  })
  @Authorization()
  @Post(':lotId')
  create(@Authorizated('id') userId: string, @Param('lotId') lotId: string) {
    return this.favoritesService.create(userId, lotId);
  }

  @ApiOperation({
    summary: 'Удаление лота из избранного',
    description:
      'Проверяет авторизован ли пользователь и убирает лот из избранного',
  })
  @ApiOkResponse({
    description: 'Лот успешно удалён из избранного',
    type: RemoveFavoriteResponseDto,
  })
  @Authorization()
  @Delete(':lotId')
  remove(@Authorizated('id') userId: string, @Param('lotId') lotId: string) {
    return this.favoritesService.remove(userId, lotId);
  }

  @ApiOperation({
    summary: 'Получение количества избранных лотов',
    description:
      'Проверяет авторизован ли пользователь и возвращает количество избранных лотов',
  })
  @ApiOkResponse({
    description: 'Количество избранных лотов',
    type: FavoritesCountResponseDto,
  })
  @Authorization()
  @Get('count')
  getCount(@Authorizated('id') userId: string) {
    return this.favoritesService.getCount(userId);
  }

  @ApiOperation({
    summary: 'Получение списка ID избранных лотов',
    description:
      'Проверяет авторизован ли пользователь и возвращает список ID избранных лотов',
  })
  @ApiOkResponse({
    description: 'Список ID избранных лотов',
    type: FavoriteIdsResponseDto,
  })
  @Authorization()
  @Get('ids')
  async getFavoriteIds(@Authorizated('id') userId: string) {
    return this.favoritesService.getFavoriteIds(userId);
  }
}
