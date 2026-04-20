import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { LOT_API_PROPERTIES } from '@/modules/lot/constants';

export class FavoriteIdsResponseDto extends ApiResponseDto<string[]> {
  @ApiProperty({
    type: [String],
    example: [
      LOT_API_PROPERTIES.ID.example,
      LOT_API_PROPERTIES.ID.example,
      LOT_API_PROPERTIES.ID.example,
    ],
    description: 'Список ID избранных лотов',
  })
  declare data: string[];
}
