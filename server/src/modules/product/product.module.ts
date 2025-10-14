import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductEntity, ProductMediaEntity } from './entities';
import { StorageService } from '@/modules/storage';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, ProductMediaEntity])],
  controllers: [ProductController],
  providers: [ProductService, StorageService, Logger],
})
export class ProductModule {}
