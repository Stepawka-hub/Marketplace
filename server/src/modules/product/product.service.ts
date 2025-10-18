import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { STORAGE_PATHS } from '@/config/s3';
import { generateFileName, getMediaType } from '@/common/utils';
import { StorageService } from '@/modules/storage';
import { UserService } from '@/modules/user';
import { ProductEntity, ProductMediaEntity } from './entities';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductMediaEntity)
    private readonly productMediaRepository: Repository<ProductMediaEntity>,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
  ) {}

  async createProduct(
    data: CreateProductDto,
    files: Express.Multer.File[],
    userId: string,
  ) {
    const user = await this.userService.findById(userId);
    // Todo: сделать транзакцией
    const product = this.productRepository.create({
      ...data,
      owner: {
        id: user.id,
      },
    });
    await this.productRepository.save(product);

    // Todo: иначе выбирать preview
    const promises: Promise<ProductMediaEntity>[] = [];

    files.forEach((f, idx) => {
      promises.push(this.createProductMedia(f, product.id, idx === 0));
    });

    await Promise.all(promises);

    return this.productRepository.findOne({
      where: { id: product.id },
      relations: ['media'],
    });
  }

  async createProductMedia(
    file: Express.Multer.File,
    productId: string,
    isPreview: boolean,
  ): Promise<ProductMediaEntity> {
    const key = generateFileName(file, STORAGE_PATHS.PRODUCTS);
    await this.storageService.uploadFile(key, file);

    const type = getMediaType(file.mimetype);
    const productMedia = this.productMediaRepository.create({
      filename: key,
      type,
      isPreview,
      product: { id: productId },
    });

    return await this.productMediaRepository.save(productMedia);
  }
}
