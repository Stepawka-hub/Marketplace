import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';

export class CreateFavoriteResponseDto extends ApiResponseDto<string> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID добавленного в избранное товара',
  })
  declare data: string;
}
