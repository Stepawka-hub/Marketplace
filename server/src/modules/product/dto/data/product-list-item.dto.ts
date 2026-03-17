import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from '../response';
import { ProductSellerDto } from './product-seller.dto';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../../constants/product-response-api.constants';

export class ProductListItemDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.PREVIEW)
  preview: string;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;
}
