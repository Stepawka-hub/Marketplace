import { ApiProperty } from '@nestjs/swagger';
import { ProductListItemDto } from '@/modules/product/dto';
import { ApiResponseDto } from '@/common';

export class FavoritesListResponseDto extends ApiResponseDto<
  ProductListItemDto[]
> {
  @ApiProperty({
    type: [ProductListItemDto],
    description: 'Массив избранных товаров',
  })
  declare data: ProductListItemDto[];
}
