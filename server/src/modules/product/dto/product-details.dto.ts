import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from './base-product.dto';
import { ApiResponseDto } from '@/common';
import { ProductMediaDto, ProductSellerDto } from './common.dto';
import { PRODUCT_API_PROPERTIES } from '../constants';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../constants/product-response-api.constants';

export class ProductDetailsDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_API_PROPERTIES.DESCRIPTION)
  description?: string;

  @ApiProperty({
    description: 'Фото/видео товара',
    type: ProductMediaDto,
    isArray: true,
  })
  media: ProductMediaDto[];

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;
}

export class ProductDetailsResponseDto extends ApiResponseDto<
  ProductDetailsDto[]
> {
  @ApiProperty({
    type: ProductDetailsDto,
    description: 'Подробная информация о товаре',
  })
  declare data: ProductDetailsDto[];
}
