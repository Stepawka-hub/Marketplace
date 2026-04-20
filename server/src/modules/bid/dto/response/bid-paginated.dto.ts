import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { BidDetailsDto } from '../data';

export class BidPaginatedResponseDto extends ApiResponseDto<
  PaginatedResponseDto<BidDetailsDto>
> {
  @ApiProperty({ type: PaginatedResponseDto<BidDetailsDto> })
  declare data: PaginatedResponseDto<BidDetailsDto>;
}
