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
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import {
  PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS,
  PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS,
} from './constants/product-validation.constants';
import { CreateProductDto, FindProductsResponseDto } from './dto';
import { ProductService } from './product.service';
import { TProductFiles } from './types';
import { ProductFilesValidationPipe } from './pipes';

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
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'preview', maxCount: 1 },
      {
        name: 'media',
        maxCount: PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS.maxCount,
      },
    ]),
  )
  @Post()
  createProduct(
    @UploadedFiles(
      new ProductFilesValidationPipe(
        PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS,
        PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS,
      ),
    )
    files: TProductFiles,
    @Body() data: CreateProductDto,
  ): Promise<FindProductsResponseDto> {
    // Todo: Добавить AuthGuard
    const userId = 'baa1c774-d4c7-44d3-a712-efbc7414f62f';
    return this.productService.createProduct(
      data,
      files.preview,
      files.media,
      userId,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Получить список товаров' })
  findProducts(): Promise<FindProductsResponseDto[]> {
    return this.productService.findProducts();
  }
}
