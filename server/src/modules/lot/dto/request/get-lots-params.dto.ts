import { PaginationDto } from '@/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, Min, Max } from 'class-validator';

export class GetLotsParamsDto extends PaginationDto {
  @ApiPropertyOptional({ description: 'Поиск по названию продукта' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    description: 'Статус лота',
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Минимальная цена' })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  minPrice?: number;

  @ApiPropertyOptional({ description: 'Максимальная цена' })
  @IsOptional()
  @Type(() => Number)
  @Max(10_000_000)
  maxPrice?: number;
}
