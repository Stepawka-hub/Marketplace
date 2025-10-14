import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { FilesValidationPipe } from '@/common/pipes';
import { PRODUCT_MEDIA_VALIDATION_OPTIONS } from './constants';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('media'))
  createProduct(
    @UploadedFiles(new FilesValidationPipe(PRODUCT_MEDIA_VALIDATION_OPTIONS))
    files: Express.Multer.File[],
    @Body() data: CreateProductDto,
  ) {
    // Todo: Добавить AuthGuard
    const userId = 'baa1c774-d4c7-44d3-a712-efbc7414f62f';
    return this.productService.create(data, files, userId);
  }
}
