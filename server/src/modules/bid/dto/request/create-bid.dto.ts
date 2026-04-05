import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, IsPositive } from 'class-validator';
import { BID_API_PROPERTIES } from '../../constants';

export class CreateBidDto {
  @ApiProperty({
    example: BID_API_PROPERTIES.AMOUNT.example,
    description: BID_API_PROPERTIES.AMOUNT.description,
    minimum: 1,
  })
  @IsNumber()
  @IsPositive()
  @Min(1)
  amount: number;
}
