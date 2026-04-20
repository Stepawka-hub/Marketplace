import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { LotActionDataDto } from '../data';

export class LotActionResponseDto extends ApiResponseDto<LotActionDataDto> {
  @ApiProperty({ type: LotActionDataDto })
  declare data: LotActionDataDto;
}
