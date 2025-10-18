import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductEntity, ProductMediaEntity } from './entities';
import { StorageModule } from '@/modules/storage';
import { UserModule } from '@/modules/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ProductMediaEntity]),
    UserModule,
    StorageModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
