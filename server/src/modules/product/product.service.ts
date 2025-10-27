import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';

import { STORAGE_PATHS } from '@/config/s3';
import { StorageService } from '@/modules/storage';
import { UserService } from '@/modules/user';
import { generateFileName, getMediaType } from '@/common/utils';
import { ProductEntity, ProductMediaEntity } from './entities';
import {
  CreateProductDto,
  ProductMediaDto,
  BaseProductResponseDto,
} from './dto';

@Injectable()
export class ProductService {
  private readonly mediaBaseUrl: string;
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductMediaEntity)
    private readonly productMediaRepository: Repository<ProductMediaEntity>,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    const domain = this.configService.getOrThrow<string>('S3_PUBLIC_DOMAIN');
    this.mediaBaseUrl = domain.endsWith('/') ? domain : domain + '/';
  }

  async createProduct(
    data: CreateProductDto,
    previewFile: Express.Multer.File,
    mediaFiles: Express.Multer.File[],
    userId: string,
  ) {
    // Todo: сделать транзакцией
    const user = await this.userService.findById(userId);
    const product = this.productRepository.create({
      ...data,
      seller: {
        id: user.id,
      },
    });
    await this.productRepository.save(product);

    // Создание изображений
    const promises: Promise<ProductMediaEntity>[] = [];

    promises.push(this.createProductMedia(previewFile, product.id, true));

    mediaFiles.forEach((f) => {
      promises.push(this.createProductMedia(f, product.id));
    });

    await Promise.all(promises);

    // Поиск и возврат созданного товара
    const createdProduct = await this.productRepository.findOne({
      where: { id: product.id },
      relations: ['media', 'seller'],
      select: {
        seller: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    });

    if (!createdProduct) {
      throw new NotFoundException('Созданный товар не найден!');
    }

    return this.mapToBaseProductDto(createdProduct);
  }

  async createProductMedia(
    file: Express.Multer.File,
    productId: string,
    isPreview = false,
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

  async findProducts(): Promise<BaseProductResponseDto[]> {
    const products = await this.productRepository.find({
      relations: {
        seller: true,
        media: true,
      },
      select: {
        seller: {
          id: true,
          firstName: true,
          lastName: true,
        },
        media: {
          filename: true,
          isPreview: true,
        },
      },
    });

    if (!products) {
      throw new NotFoundException('Products not found!');
    }

    return products.map((product) => this.mapToBaseProductDto(product));
  }

  private mapToBaseProductDto(product: ProductEntity): BaseProductResponseDto {
    const media: ProductMediaDto[] = product.media.map((m) => ({
      url: this.mediaBaseUrl + m.filename,
      isPreview: m.isPreview,
    }));

    return {
      ...product,
      media,
    };
  }
}
