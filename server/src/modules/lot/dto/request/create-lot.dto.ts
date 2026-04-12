import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNumber,
  IsDate,
  Min,
  IsPositive,
  Max,
  IsInt,
  IsNotEmpty,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { LOT_API_PROPERTIES, LOT_VALIDATION } from '../../constants';
import { toUTCDate } from '@/common/utils';

export class CreateLotDto {
  @ApiProperty(LOT_API_PROPERTIES.PRODUCT_ID)
  @IsUUID()
  productId: string;

  @ApiProperty(LOT_API_PROPERTIES.START_PRICE)
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(LOT_VALIDATION.PRICE.MIN)
  @Max(LOT_VALIDATION.PRICE.MAX)
  @Type(() => Number)
  startPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.MIN_BID_INCREMENT)
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(LOT_VALIDATION.MIN_BID_INCREMENT.MIN)
  @Max(LOT_VALIDATION.MIN_BID_INCREMENT.MAX)
  @Type(() => Number)
  minBidIncrement: number;

  @ApiProperty(LOT_API_PROPERTIES.END_TIME)
  @IsDate()
  @Transform(toUTCDate)
  @IsNotEmpty()
  @Type(() => Date)
  endTime: Date;
}
