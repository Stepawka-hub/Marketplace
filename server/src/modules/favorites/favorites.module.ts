import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { FavoriteEntity } from './entities';
import { ProductModule } from '../product';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteEntity]), ProductModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
