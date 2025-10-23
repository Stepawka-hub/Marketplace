import { ApiProperty } from '@nestjs/swagger';
import { AUTH_API_PROPERTIES } from '../constants';

export class AuthResponseDto {
  @ApiProperty(AUTH_API_PROPERTIES.ACCESS_TOKEN)
  accessToken: string;
}
