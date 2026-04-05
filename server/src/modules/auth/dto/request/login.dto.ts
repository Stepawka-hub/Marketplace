import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  USER_API_PROPERTIES,
  USER_VALIDAION_MESSAGES,
  USER_VALIDATION,
} from '@/modules/user/constants';

export class LoginRequestDto {
  @ApiProperty(USER_API_PROPERTIES.EMAIL)
  @IsEmail({}, { message: USER_VALIDAION_MESSAGES.EMAIL.INVALID })
  @IsNotEmpty()
  @Length(USER_VALIDATION.EMAIL.MIN, USER_VALIDATION.EMAIL.MAX)
  email: string;

  @ApiProperty(USER_API_PROPERTIES.PASSWORD)
  @IsString()
  @Length(USER_VALIDATION.PASSWORD.MIN, USER_VALIDATION.PASSWORD.MAX)
  @IsNotEmpty()
  password: string;
}
