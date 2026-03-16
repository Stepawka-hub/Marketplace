import { ApiProperty } from '@nestjs/swagger';

export class AddToCartDto {
  @ApiProperty({
    example: 1,
    minimum: 1,
    default: 1,
    required: false,
    description: 'Количество товара для добавления',
  })
  count?: number;
}
