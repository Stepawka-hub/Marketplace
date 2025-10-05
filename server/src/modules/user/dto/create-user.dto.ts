import { PATTERNS } from '@/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
  Matches,
} from 'class-validator';
import { MESSAGES, VALIDATION, API_PROPERTY } from '../constants';

export class CreateUserDto {
  @ApiProperty(API_PROPERTY.EMAIL)
  @IsEmail({}, { message: MESSAGES.EMAIL.INVALID })
  @IsNotEmpty()
  @Length(VALIDATION.EMAIL.MIN, VALIDATION.EMAIL.MAX)
  email: string;

  @ApiPropertyOptional(API_PROPERTY.PHONE)
  @IsOptional()
  @IsPhoneNumber('RU', { message: MESSAGES.PHONE.INVALID })
  @IsString()
  @Length(VALIDATION.PHONE.MIN, VALIDATION.PHONE.MAX)
  phone: string;

  @ApiProperty(API_PROPERTY.FIRST_NAME)
  @IsString()
  @Length(VALIDATION.NAME.MIN, VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: MESSAGES.NAME.INVALID('First name'),
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty(API_PROPERTY.LAST_NAME)
  @IsString()
  @Length(VALIDATION.NAME.MIN, VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: MESSAGES.NAME.INVALID('Last name'),
  })
  @IsNotEmpty()
  lastName: string;

  @ApiPropertyOptional(API_PROPERTY.AVATAR)
  @IsOptional()
  @IsString()
  @IsUrl()
  avatar: string;
}
