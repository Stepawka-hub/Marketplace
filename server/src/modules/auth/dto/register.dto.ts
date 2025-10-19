import { PATTERNS } from '@/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import {
  USER_API_PROPERTIES,
  USER_VALIDAION_MESSAGES,
  USER_VALIDATION,
} from '@/modules/user/constants';

export class RegisterRequestDto {
  @ApiProperty(USER_API_PROPERTIES.EMAIL)
  @IsEmail({}, { message: USER_VALIDAION_MESSAGES.EMAIL.INVALID })
  @IsNotEmpty()
  @Length(USER_VALIDATION.EMAIL.MIN, USER_VALIDATION.EMAIL.MAX)
  email: string;

  @ApiPropertyOptional(USER_API_PROPERTIES.PHONE)
  @IsOptional()
  @IsPhoneNumber('RU', { message: USER_VALIDAION_MESSAGES.PHONE.INVALID })
  @IsString()
  @Length(USER_VALIDATION.PHONE.MIN, USER_VALIDATION.PHONE.MAX)
  phone: string;

  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  @IsString()
  @Length(USER_VALIDATION.NAME.MIN, USER_VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: USER_VALIDAION_MESSAGES.NAME.INVALID('First name'),
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  @IsString()
  @Length(USER_VALIDATION.NAME.MIN, USER_VALIDATION.NAME.MAX)
  @Matches(PATTERNS.NAME, {
    message: USER_VALIDAION_MESSAGES.NAME.INVALID('Last name'),
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty(USER_API_PROPERTIES.PASSWORD)
  @IsString()
  @Length(USER_VALIDATION.PASSWORD.MIN, USER_VALIDATION.PASSWORD.MAX)
  @IsNotEmpty()
  password: string;
}
