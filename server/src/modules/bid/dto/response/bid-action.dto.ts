import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { BidActionDataDto } from '../data';

export class BidActionResponseDto extends ApiResponseDto<BidActionDataDto> {
  @ApiProperty({ type: BidActionDataDto })
  declare data: BidActionDataDto;
}
