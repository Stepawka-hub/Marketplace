import { ApiProperty } from '@nestjs/swagger';
import { BaseProductResponseDto } from '../response';
import { ProductMediaDto } from './product-media.dto';
import { PRODUCT_API_PROPERTIES } from '../../constants';
import { PRODUCT_RESPONSE_API_PROPERTIES } from '../../constants/product-response-api.constants';
import { ProductSellerDto } from './product-seller.dto';

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
