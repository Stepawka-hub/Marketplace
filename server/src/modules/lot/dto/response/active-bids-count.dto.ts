import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';

export class ActiveBidsCountResponseDto extends ApiResponseDto<number> {
  @ApiProperty({ example: 3, description: 'Количество активных ставок' })
  declare data: number;
}
