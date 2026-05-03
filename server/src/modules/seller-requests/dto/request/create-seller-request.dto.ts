import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  Length,
  Matches,
} from 'class-validator';
import { REGISTRATION_TYPES, SELLER_REQUEST_VALIDATION } from '../../constants';
import { TRegistrationType } from '../../types';

export class CreateSellerRequestDto {
  @ApiProperty({ enum: REGISTRATION_TYPES })
  @IsEnum(REGISTRATION_TYPES)
  registrationType: TRegistrationType;

  @ApiProperty()
  @IsString()
  @Length(
    SELLER_REQUEST_VALIDATION.COMPANY_NAME.MIN,
    SELLER_REQUEST_VALIDATION.COMPANY_NAME.MAX,
  )
  companyName: string;

  @ApiProperty()
  @IsString()
  @Matches(SELLER_REQUEST_VALIDATION.INN.PATTERN, {
    message: SELLER_REQUEST_VALIDATION.INN.MESSAGE,
  })
  inn: string;

  @ApiProperty()
  @IsString()
  @Length(
    SELLER_REQUEST_VALIDATION.PHONE.MIN,
    SELLER_REQUEST_VALIDATION.PHONE.MAX,
  )
  phone: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Length(0, SELLER_REQUEST_VALIDATION.DESCRIPTION.MAX)
  description?: string;
}
