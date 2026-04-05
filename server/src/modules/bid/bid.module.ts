import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { BidEntity } from './entities';
import { ProductEntity } from '../product/entities';
import { ProductModule } from '@/modules/product';
import { ProductMapper } from '@/modules/product/mappers';

@Module({
  imports: [
    TypeOrmModule.forFeature([BidEntity, ProductEntity]),
    ProductModule,
  ],
  controllers: [BidController],
  providers: [BidService, ProductMapper],
  exports: [BidService],
})
export class BidModule {}
