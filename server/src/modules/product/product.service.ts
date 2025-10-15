import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StorageService } from '@/modules/storage';
import { ProductEntity, ProductMediaEntity } from './entities';
import { CreateProductDto } from './dto';
import { generateFileName, getMediaType, isImage } from '@/common/utils';
import { MEDIA_TYPE } from '@/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductMediaEntity)
    private readonly productMediaRepository: Repository<ProductMediaEntity>,
    private readonly storageService: StorageService,
  ) {}

  async createProduct(
    data: CreateProductDto,
    files: Express.Multer.File[],
    userId: string,
  ) {
    // Todo: сделать транзакцией
    const product = this.productRepository.create({
      ...data,
      owner: { id: userId },
    });
    await this.productRepository.save(product);

    // Todo: иначе выбирать preview
    const promises: Promise<ProductMediaEntity>[] = [];

    files.forEach((f, idx) => {
      promises.push(this.createProductMedia(f, product.id, idx === 0));
    });

    await Promise.all(promises);

    // Todo: Возвращать вместе с изображениями
    return product;
  }

  async createProductMedia(
    file: Express.Multer.File,
    productId: string,
    isPreview: boolean,
  ): Promise<ProductMediaEntity> {
    // Todo: Вынести путь в константы
    const key = generateFileName(file, 'products/media/');
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
