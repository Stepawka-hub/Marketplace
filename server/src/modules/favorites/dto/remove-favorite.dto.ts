import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';

export class RemoveFavoriteResponseDto extends ApiResponseDto<null> {
  @ApiProperty({
    example: null,
    nullable: true,
  })
  declare data: null;
}
