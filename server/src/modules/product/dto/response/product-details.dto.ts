import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from '@/common';
import { ProductDetailsDto } from '../data';

export class ProductDetailsResponseDto extends ApiResponseDto<ProductDetailsDto> {
  @ApiProperty({
    type: ProductDetailsDto,
    description: 'Подробная информация о товаре',
  })
  declare data: ProductDetailsDto;
}
