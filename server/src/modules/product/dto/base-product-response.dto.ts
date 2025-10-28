import { ApiProperty } from '@nestjs/swagger';
import { ProductMediaDto, ProductSellerDto } from './common.dto';
import { PRODUCT_API_PROPERTIES } from '../constants';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../constants/product-response-api.constants';

export class BaseProductResponseDto {
  @ApiProperty(PRODUCT_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.NAME)
  name: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  category: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.PRICE)
  price: number;

  @ApiProperty(PRODUCT_API_PROPERTIES.RATING)
  rating: number;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.SELLER)
  seller: ProductSellerDto;

  @ApiProperty(PRODUCT_RESPONSE_API_PROPERTIES.MEDIA)
  media: ProductMediaDto[];

  @ApiProperty(PRODUCT_API_PROPERTIES.CREATE_DATE)
  createdAt: Date;
}
