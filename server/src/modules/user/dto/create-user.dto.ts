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
import { MESSAGES, VALIDATION, USER_API_PROPERTIES } from '../constants';

export class CreateUserDto {
  @ApiProperty(USER_API_PROPERTIES.EMAIL)
  @IsEmail({}, { message: MESSAGES.EMAIL.INVALID })
  @IsNotEmpty()
  @Length(VALIDATION.EMAIL.MIN, VALIDATION.EMAIL.MAX)
  email: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.PHONE)
  @IsOptional()
  @IsPhoneNumber('RU', { message: MESSAGES.PHONE.INVALID })
  @IsString()
  @Length(VALIDATION.PHONE.MIN, VALIDATION.PHONE.MAX)
  phone: string;

  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  @IsString()
  @Length(VALIDATION.NAME.MIN, VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: MESSAGES.NAME.INVALID('First name'),
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  @IsString()
  @Length(VALIDATION.NAME.MIN, VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: MESSAGES.NAME.INVALID('Last name'),
  })
  @IsNotEmpty()
  lastName: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.AVATAR)
  @IsOptional()
  @IsString()
  @IsUrl()
  avatar: string;
}
