import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { PRODUCT_API_PROPERTIES, PRODUCT_VALIDATION } from '../constants';

export class CreateProductDto {
  @ApiProperty(PRODUCT_API_PROPERTIES.NAME)
  @IsNotEmpty()
  @IsString()
  @Length(PRODUCT_VALIDATION.NAME.MIN, PRODUCT_VALIDATION.NAME.MAX)
  name: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.SHORT_DESCRIPTION)
  @IsNotEmpty()
  @IsString()
  @Length(
    PRODUCT_VALIDATION.SHORT_DESCRIPTION.MIN,
    PRODUCT_VALIDATION.SHORT_DESCRIPTION.MAX,
  )
  shortDescription: string;

  @ApiPropertyOptional(PRODUCT_API_PROPERTIES.DESCRIPTION)
  @IsOptional()
  @IsString()
  @Length(
    PRODUCT_VALIDATION.DESCRIPTION.MIN,
    PRODUCT_VALIDATION.DESCRIPTION.MAX,
  )
  description?: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  @IsNotEmpty()
  @IsString()
  @Length(PRODUCT_VALIDATION.CATEGORY.MIN, PRODUCT_VALIDATION.CATEGORY.MAX)
  category: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.PRICE)
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: PRODUCT_VALIDATION.PRICE.SCALE })
  @Min(PRODUCT_VALIDATION.PRICE.MIN)
  @Max(PRODUCT_VALIDATION.PRICE.MAX)
  price: number;

  @ApiProperty(PRODUCT_API_PROPERTIES.RATING)
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: PRODUCT_VALIDATION.RATING.SCALE })
  @Min(PRODUCT_VALIDATION.RATING.MIN)
  @Max(PRODUCT_VALIDATION.RATING.MAX)
  rating: number;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  media?: any;

  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  preview?: any;
}
