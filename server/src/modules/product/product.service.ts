import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { StorageService } from '@/modules/storage/storage.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
  ) {}

  async create(
    data: CreateProductDto,
    files: Express.Multer.File[],
    userId: string,
  ) {
    
  }
}
