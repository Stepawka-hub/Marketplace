import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from './base-product.dto';
import { ProductSellerDto } from './common.dto';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../constants/product-response-api.constants';

export class ProductListItemResponseDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.PREVIEW)
  preview: string;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;
}
