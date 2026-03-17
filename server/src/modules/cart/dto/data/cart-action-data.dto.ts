import { ApiProperty } from '@nestjs/swagger';

export class CartActionDataDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID товара',
  })
  productId: string;

  @ApiProperty({ example: 2, description: 'Количество товара' })
  count: number;
}
