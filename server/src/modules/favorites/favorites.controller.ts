import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { Authorizated } from '../auth/decorators';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll(@Authorizated('id') userId: string) {
    return this.favoritesService.findAll(userId);
  }

  @Post(':productId')
  create(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.favoritesService.create(userId, productId);
  }

  @Delete(':productId')
  remove(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.favoritesService.remove(userId, productId);
  }
}
