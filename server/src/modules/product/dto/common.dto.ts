import { ApiProperty } from '@nestjs/swagger';
import { USER_API_PROPERTIES } from '@/modules/user/constants';
import { PRODUCT_MEDIA_API_PROPERTIES } from '../constants';

export class ProductMediaDto {
  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.URL)
  url: string;

  @ApiProperty(PRODUCT_MEDIA_API_PROPERTIES.IS_PREVIEW)
  isPreview: boolean;
}

export class ProductSellerDto {
  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  lastName: string;
}
