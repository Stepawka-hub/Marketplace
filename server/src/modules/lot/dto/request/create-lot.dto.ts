import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDate, Min, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { LOT_API_PROPERTIES, LOT_VALIDATION } from '../../constants';

export class CreateLotDto {
  @ApiProperty(LOT_API_PROPERTIES.PRODUCT_ID)
  @IsUUID()
  productId: string;

  @ApiProperty(LOT_API_PROPERTIES.START_PRICE)
  @IsNumber()
  @IsPositive()
  @Min(LOT_VALIDATION.PRICE.MIN)
  @Type(() => Number)
  startPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.MIN_BID_INCREMENT)
  @IsNumber()
  @IsPositive()
  @Min(LOT_VALIDATION.MIN_BID_INCREMENT.MIN)
  @Type(() => Number)
  minBidIncrement: number;

  @ApiProperty(LOT_API_PROPERTIES.START_TIME)
  @IsDate()
  @Type(() => Date)
  startTime: Date;

  @ApiProperty(LOT_API_PROPERTIES.END_TIME)
  @IsDate()
  @Type(() => Date)
  endTime: Date;
}
