import { ApiProperty } from '@nestjs/swagger';
import { ProductListItemDto } from '@/modules/product/dto';
import { COMMON_API_PROPERTIES } from '@/common';

export class CartItemDto {
  @ApiProperty({
    example: 2,
    description: 'Количество товара',
    minimum: 1,
  })
  count: number;

  @ApiProperty({
    type: ProductListItemDto,
    description: 'Информация о товаре',
  })
  product: ProductListItemDto;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  updatedAt: Date;
}
