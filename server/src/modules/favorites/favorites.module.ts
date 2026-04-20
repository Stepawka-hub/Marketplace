import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { FavoriteEntity } from './entities';
import { LotModule } from '../lot';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteEntity]), LotModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
