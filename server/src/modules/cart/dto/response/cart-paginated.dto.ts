import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { CartItemDto } from '../data/cart-item.dto';

export class CartPaginatedResponseDto extends ApiResponseDto<
  PaginatedResponseDto<CartItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<CartItemDto>,
    description: 'Пагинированный список товаров в корзине с общей стоимостью',
  })
  declare data: PaginatedResponseDto<CartItemDto> & { totalPrice: number };
}
