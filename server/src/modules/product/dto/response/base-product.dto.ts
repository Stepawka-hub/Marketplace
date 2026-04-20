import { ApiProperty } from '@nestjs/swagger';
import { PRODUCT_API_PROPERTIES } from '../../constants';

export class BaseProductResponseDto {
  @ApiProperty(PRODUCT_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.NAME)
  name: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.SHORT_DESCRIPTION)
  shortDescription: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  category: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CREATE_DATE)
  createdAt: Date;

  @ApiProperty(PRODUCT_API_PROPERTIES.UPDATE_DATE)
  updatedAt: Date;
}
