import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { PRODUCT_API_PROPERTIES, PRODUCT_VALIDATION } from '../../constants';

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
  @MaxLength(PRODUCT_VALIDATION.DESCRIPTION.MAX)
  description?: string;

  @ApiProperty(PRODUCT_API_PROPERTIES.CATEGORY)
  @IsNotEmpty()
  @IsString()
  @Length(PRODUCT_VALIDATION.CATEGORY.MIN, PRODUCT_VALIDATION.CATEGORY.MAX)
  category: string;

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
