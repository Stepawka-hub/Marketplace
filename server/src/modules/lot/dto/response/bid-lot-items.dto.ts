import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { BidLotItemDto } from '../data';

export class BidLotItemsResponseDto extends ApiResponseDto<
  PaginatedResponseDto<BidLotItemDto>
> {
  @ApiProperty({ type: PaginatedResponseDto<BidLotItemDto> })
  declare data: PaginatedResponseDto<BidLotItemDto>;
}
