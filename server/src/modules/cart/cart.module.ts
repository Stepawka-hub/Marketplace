import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from './entities';
import { ProductEntity } from '../product/entities';
import { ProductModule } from '@/modules/product';
import { ProductMapper } from '@/modules/product/mappers';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity, ProductEntity]),
    ProductModule,
  ],
  controllers: [CartController],
  providers: [CartService, ProductMapper],
  exports: [CartService],
})
export class CartModule {}
