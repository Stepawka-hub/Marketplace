import { ApiResponseDto } from '@/common';
import { ApiProperty } from '@nestjs/swagger';

export class CartDeleteResponseDto extends ApiResponseDto<null> {
  @ApiProperty({
    type: 'null',
    example: null,
  })
  declare data: null;
}
