import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, Max } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: 1000,
    description: 'Сумма пополнения (от 100 до 100000 ₽)',
  })
  @IsNumber()
  @Min(100)
  @Max(100_000)
  amount: number;
}
