import { ApiProperty } from '@nestjs/swagger';
import { ProductListItemDto } from '@/modules/product/dto';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';

export class FavoritesListResponseDto extends ApiResponseDto<
  PaginatedResponseDto<ProductListItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<ProductListItemDto>,
    description: 'Пагинированный список избранных товаров',
  })
  declare data: PaginatedResponseDto<ProductListItemDto>;
}
