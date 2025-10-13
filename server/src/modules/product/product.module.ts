import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductEntity, ProductMediaEntity } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, ProductMediaEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
