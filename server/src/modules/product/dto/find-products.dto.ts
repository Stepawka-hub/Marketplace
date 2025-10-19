import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from './base-product-response.dto';
import { PRODUCT_API_PROPERTIES } from '../constants';

export class FindProductsResponseDto extends BaseProductResponseDto {}

export class FindOneProductResponseDto extends BaseProductResponseDto {
  @ApiProperty(PRODUCT_API_PROPERTIES.SHORT_DESCRIPTION)
  shortDescription: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.DESCRIPTION)
  description: string;
}
