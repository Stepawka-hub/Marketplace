import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';

export class FavoritesCountResponseDto extends ApiResponseDto<number> {
  @ApiProperty({
    type: Number,
    description: 'Количество товаров в избранном',
    example: 5,
  })
  declare data: number;
}
