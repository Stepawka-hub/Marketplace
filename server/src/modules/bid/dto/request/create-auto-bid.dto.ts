import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CreateAutoBidDto {
  @ApiProperty({
    example: 50000,
    description: 'Максимальная сумма автоставки',
  })
  @IsNumber()
  @Min(1)
  maxAmount: number;
}
