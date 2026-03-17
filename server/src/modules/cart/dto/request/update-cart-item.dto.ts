import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartItemDto {
  @ApiProperty({
    example: 3,
    minimum: 1,
    description: 'Новое количество товара',
  })
  count: number;
}
