import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { ActiveBidLotDto } from '../data';

export class ActiveBidLotsResponseDto extends ApiResponseDto<
  PaginatedResponseDto<ActiveBidLotDto>
> {
  @ApiProperty({ type: PaginatedResponseDto<ActiveBidLotDto> })
  declare data: PaginatedResponseDto<ActiveBidLotDto>;
}
