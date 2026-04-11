import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { In, Repository } from 'typeorm';

import { STORAGE_PATHS } from '@/config/s3';
import { StorageService } from '@/modules/storage';
import { UserService } from '@/modules/user';

import { ProductMapper } from './mappers';
import { ApiPaginatedResponse, ApiResponse } from '@/common/helpers';
import { generateFileName, getMediaType } from '@/common/utils';
import { PaginationDto } from '@/common/dto';

import { ProductEntity, ProductMediaEntity } from './entities';
import { CreateProductDto } from './dto';
import {
  TProductByIdsResponse,
  TProductCreateResponse,
  TProductDetailsResponse,
  TProductListResponse,
} from './types';

@Injectable()
export class ProductService {
  private readonly baseUrl: string;
  public readonly productMapper: ProductMapper;

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
    this.baseUrl = domain.endsWith('/') ? domain : domain + '/';

    this.productMapper = new ProductMapper(this.baseUrl);
  }

  async createProduct(
    data: CreateProductDto,
    previewFile: Express.Multer.File,
    mediaFiles: Express.Multer.File[],
    userId: string,
  ): Promise<TProductCreateResponse> {
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
          avatar: true,
        },
      },
    });

    if (!createdProduct) {
      throw new NotFoundException('Созданный товар не найден!');
    }

    return ApiResponse.success(
      this.productMapper.toDetails(createdProduct),
      'Товар успешно создан!',
    );
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

  async findProducts(
    paginationDto: PaginationDto,
  ): Promise<TProductListResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [products, total] = await this.productRepository.findAndCount({
      relations: {
        seller: true,
        media: true,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        category: true,
        createdAt: true,
        seller: {
          id: true,
          firstName: true,
          lastName: true,
        },
        media: {
          id: true,
          filename: true,
          isPreview: true,
        },
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      this.productMapper.toListItemArray(products),
      total,
      page,
      limit,
      'Список товаров успешно получен',
    );
  }

  async findProductsBySeller(
    paginationDto: PaginationDto,
    sellerId: string,
  ): Promise<TProductListResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [products, total] = await this.productRepository.findAndCount({
      where: {
        seller: { id: sellerId },
      },
      relations: {
        seller: true,
        media: true,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        category: true,
        createdAt: true,
        seller: {
          id: true,
          firstName: true,
          lastName: true,
        },
        media: {
          id: true,
          filename: true,
          isPreview: true,
        },
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      this.productMapper.toListItemArray(products),
      total,
      page,
      limit,
      'Список ваших товаров успешно получен',
    );
  }

  async findProductById(id: string): Promise<TProductDetailsResponse> {
    const product = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.seller', 'seller')
      .leftJoinAndSelect('product.media', 'media')
      .where('product.id = :id', { id })
      .select([
        'product.id',
        'product.name',
        'product.shortDescription',
        'product.description',
        'product.category',
        'seller.id',
        'seller.firstName',
        'seller.lastName',
        'seller.avatar',
        'media.id',
        'media.filename',
        'media.isPreview',
      ])
      .getOne();

    if (!product) {
      throw new NotFoundException('Товар не найден!');
    }

    return ApiResponse.success(this.productMapper.toDetails(product));
  }

  async findProductsByIds(
    ids: string[],
    paginationDto: PaginationDto,
  ): Promise<TProductByIdsResponse> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [products, total] = await this.productRepository.findAndCount({
      where: {
        id: In(ids),
      },
      order: {
        createdAt: 'DESC',
      },
      relations: {
        seller: true,
        media: true,
      },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        category: true,
        createdAt: true,
        seller: {
          id: true,
          firstName: true,
          lastName: true,
        },
        media: {
          id: true,
          filename: true,
          isPreview: true,
        },
      },
      skip,
      take: limit,
    });

    return ApiPaginatedResponse.success(
      this.productMapper.toListItemArray(products),
      total,
      page,
      limit,
      'Товары успешно получены',
    );
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.productRepository.count({
      where: { id },
    });

    return count > 0;
  }
}
