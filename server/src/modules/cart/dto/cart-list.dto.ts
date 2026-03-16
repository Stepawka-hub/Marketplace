import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { CartItemDto } from './cart-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CartListResponseDto extends ApiResponseDto<
  PaginatedResponseDto<CartItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<CartItemDto>,
    description: 'Пагинированный список товаров в корзине',
  })
  declare data: PaginatedResponseDto<CartItemDto>;
}
