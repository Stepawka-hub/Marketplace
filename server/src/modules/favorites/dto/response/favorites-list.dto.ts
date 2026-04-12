import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto, PaginatedResponseDto } from '@/common';
import { LotListItemDto } from '@/modules/lot/dto';

export class FavoritesListResponseDto extends ApiResponseDto<
  PaginatedResponseDto<LotListItemDto>
> {
  @ApiProperty({
    type: PaginatedResponseDto<LotListItemDto>,
    description: 'Пагинированный список избранных лотов',
  })
  declare data: PaginatedResponseDto<LotListItemDto>;
}
