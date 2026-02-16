import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { Authorizated, Authorization } from '@/modules/auth/decorators';
import { ProductService } from './product.service';
import { ProductFilesValidationPipe } from './pipes';
import {
  CreateProductDto,
  ProductDetailsDto,
  ProductDetailsResponseDto,
  ProductListItemDto,
  ProductListItemResponseDto,
} from './dto';
import {
  PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS,
  PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS,
} from './constants';
import { TProductFiles } from './types';
import { TApiResponse } from '@/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Создать товар' })
  @ApiOkResponse({
    description: 'Товар создан',
    type: ProductDetailsResponseDto,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Данные товара с превью товара и медиа-файлами',
    type: CreateProductDto,
  })
  @ApiBearerAuth()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'preview', maxCount: 1 },
      {
        name: 'media',
        maxCount: PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS.maxCount,
      },
    ]),
  )
  @Authorization()
  @Post()
  createProduct(
    @Authorizated('id') userId: string,
    @UploadedFiles(
      new ProductFilesValidationPipe(
        PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS,
        PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS,
      ),
    )
    files: TProductFiles,
    @Body() data: CreateProductDto,
  ): Promise<TApiResponse<ProductDetailsDto>> {
    return this.productService.createProduct(
      data,
      files.preview,
      files.media,
      userId,
    );
  }

  @ApiOkResponse({
    description: 'Список товаров',
    type: ProductListItemResponseDto,
  })
  @ApiOperation({ summary: 'Получить список товаров' })
  @Get()
  findProducts(): Promise<TApiResponse<ProductListItemDto[]>> {
    return this.productService.findProducts();
  }

  @ApiOperation({ summary: 'Получить товар по ID' })
  @ApiOkResponse({
    description: 'Подробная информация о товаре',
    type: ProductDetailsResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Товар не найден' })
  @Get(':productId')
  findProductById(
    @Param('productId') id: string,
  ): Promise<TApiResponse<ProductDetailsDto>> {
    return this.productService.findProductById(id);
  }
}
