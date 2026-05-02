import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { UserEntity } from '../user/entities';
import { LotEntity } from '../lot/entities';
import { SellerRequestEntity } from '../seller-requests/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, LotEntity, SellerRequestEntity]),
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
