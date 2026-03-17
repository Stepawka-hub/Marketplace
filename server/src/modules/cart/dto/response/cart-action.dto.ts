import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { CartActionDataDto } from '../data';

export class CartActionResponseDto extends ApiResponseDto<CartActionDataDto> {
  @ApiProperty({
    type: CartActionDataDto,
    description: 'Информация о добавленном/обновленном товаре',
  })
  declare data: CartActionDataDto;
}
