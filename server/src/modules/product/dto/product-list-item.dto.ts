import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from './base-product.dto';
import { ProductSellerDto } from './common.dto';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../constants/product-response-api.constants';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';

export class ProductListItemDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.PREVIEW)
  preview: string;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;
}

export class ProductListPaginatedResponseDto extends ApiResponseDto<
  PaginatedResponseDto<ProductListItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<ProductListItemDto>,
    description: 'Пагинированный список товаров',
  })
  declare data: PaginatedResponseDto<ProductListItemDto>;
}
