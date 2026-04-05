import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { BidHistoryLotDto } from '../data';

export class BidHistoryLotsResponseDto extends ApiResponseDto<
  PaginatedResponseDto<BidHistoryLotDto>
> {
  @ApiProperty({ type: PaginatedResponseDto<BidHistoryLotDto> })
  declare data: PaginatedResponseDto<BidHistoryLotDto>;
}
