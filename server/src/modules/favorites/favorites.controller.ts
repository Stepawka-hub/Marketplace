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

  @Post()
  create() {
    return this.favoritesService.create();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
