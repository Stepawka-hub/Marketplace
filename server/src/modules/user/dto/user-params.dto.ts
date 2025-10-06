import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { USER_API_PROPERTIES } from '../constants';

export class UserParamsDto {
  @ApiProperty(USER_API_PROPERTIES.ID)
  @IsUUID('4', { message: 'ID must be a valid UUID' })
  id: string;
}
