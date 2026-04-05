import { ApiProperty } from '@nestjs/swagger';
import { LOT_API_PROPERTIES } from '../../constants';

export class LotActionDataDto {
  @ApiProperty(LOT_API_PROPERTIES.ID)
  id: string;

  @ApiProperty({ example: 'Лот успешно создан' })
  message?: string;
}
