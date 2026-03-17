import { ApiProperty } from '@nestjs/swagger';
import { PRODUCT_MEDIA_API_PROPERTIES } from '../../constants';

export class ProductMediaDto {
  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.URL)
  url: string;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.IS_PREVIEW)
  isPreview: boolean;
}
