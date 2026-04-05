import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { LotResponseDto } from './lot.dto';

export class LotPaginatedResponseDto extends ApiResponseDto<
  PaginatedResponseDto<LotResponseDto>
> {
  @ApiProperty({ type: PaginatedResponseDto<LotResponseDto> })
  declare data: PaginatedResponseDto<LotResponseDto>;
}
