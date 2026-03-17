import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { ProductListItemDto } from '../data';

export class ProductListPaginatedResponseDto extends ApiResponseDto<
  PaginatedResponseDto<ProductListItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<ProductListItemDto>,
    description: 'Пагинированный список товаров',
  })
  declare data: PaginatedResponseDto<ProductListItemDto>;
}
