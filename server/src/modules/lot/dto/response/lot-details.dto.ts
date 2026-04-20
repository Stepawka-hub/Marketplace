import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { LotResponseDto } from './lot.dto';

export class LotDetailsResponseDto extends ApiResponseDto<LotResponseDto> {
  @ApiProperty({ type: LotResponseDto })
  declare data: LotResponseDto;
}
