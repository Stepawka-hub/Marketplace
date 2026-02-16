import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from './base-product.dto';
import { ProductSellerDto } from './common.dto';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../constants/product-response-api.constants';
import { ApiResponseDto } from '@/common';

export class ProductListItemDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.PREVIEW)
  preview: string;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;
}

export class ProductListItemResponseDto extends ApiResponseDto<
  ProductListItemDto[]
> {
  @ApiProperty({
    type: [ProductListItemDto],
    description: 'Массив товаров',
  })
  declare data: ProductListItemDto[];
}
