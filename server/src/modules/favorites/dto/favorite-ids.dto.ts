import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { PRODUCT_API_PROPERTIES } from '@/modules/product/constants';

export class FavoriteIdsResponseDto extends ApiResponseDto<string[]> {
  @ApiProperty({
    type: [String],
    example: [
      PRODUCT_API_PROPERTIES.ID.example,
      PRODUCT_API_PROPERTIES.ID.example,
      PRODUCT_API_PROPERTIES.ID.example,
    ],
    description: 'Список ID избранных товаров',
  })
  declare data: string[];
}
