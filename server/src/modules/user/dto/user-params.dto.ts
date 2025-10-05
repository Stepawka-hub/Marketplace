import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { API_PROPERTY } from '../constants';

export class UserParamsDto {
  @ApiProperty(API_PROPERTY.ID)
  @IsUUID('4', { message: 'ID must be a valid UUID' })
  id: string;
}
