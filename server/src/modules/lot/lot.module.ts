import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LotService } from './lot.service';
import { LotController } from './lot.controller';
import { LotEntity } from './entities';
import { ProductModule } from '@/modules/product';
import { BidEntity } from '../bid/entities';
import { StorageModule } from '../storage';

@Module({
  imports: [
    TypeOrmModule.forFeature([LotEntity, BidEntity]),
    ProductModule,
    StorageModule,
  ],
  controllers: [LotController],
  providers: [LotService],
  exports: [LotService],
})
export class LotModule {}
