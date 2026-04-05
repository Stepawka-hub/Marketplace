import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';

export class CartCountResponseDto extends ApiResponseDto<number> {
  @ApiProperty({
    example: 5,
    description: 'Количество уникальных товаров в корзине',
  })
  declare data: number;
}
