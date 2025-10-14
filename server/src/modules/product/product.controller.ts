import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto';
import { PRODUCT_VALIDATION } from './constants';
import { FilesValidationPipe } from '@/common/pipes';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('media', { storage: null }))
  createProduct(
    @UploadedFiles(
      new FilesValidationPipe({
        minCount: PRODUCT_VALIDATION.MEDIA.MIN_COUNT,
        maxCount: PRODUCT_VALIDATION.MEDIA.MAX_COUNT,
        maxImageSize: PRODUCT_VALIDATION.MEDIA.MAX_IMAGE_SIZE,
        maxVideoSize: PRODUCT_VALIDATION.MEDIA.MAX_VIDEO_SIZE,
        allowedMimeTypes: PRODUCT_VALIDATION.MEDIA.ALLOWED_MIME_TYPES,
      }),
    )
    files: Express.Multer.File[],
    @Body() data: CreateProductDto,
  ) {
    return this.productService.create(data, files);
  }
}
