import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { Authorizated, Authorization } from '@/modules/auth/decorators';
import { ProductService } from './product.service';
import { ProductFilesValidationPipe } from './pipes';
import { BaseProductResponseDto, CreateProductDto } from './dto';
import {
  PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS,
  PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS,
} from './constants';
import { TProductFiles } from './types';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Создать товар' })
  @ApiOkResponse({ description: 'Товар создан' })
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
  ): Promise<BaseProductResponseDto> {
    return this.productService.createProduct(
      data,
      files.preview,
      files.media,
      userId,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Получить список товаров' })
  findProducts(): Promise<BaseProductResponseDto[]> {
    return this.productService.findProducts();
  }
}
