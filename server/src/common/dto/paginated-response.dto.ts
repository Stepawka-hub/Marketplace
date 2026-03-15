import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetaDto {
  @ApiProperty({ example: 50, description: 'Общее количество элементов' })
  total: number;

  @ApiProperty({ example: 1, description: 'Текущая страница' })
  page: number;

  @ApiProperty({ example: 10, description: 'Количество элементов на странице' })
  limit: number;

  @ApiProperty({ example: 5, description: 'Общее количество страниц' })
  totalPages: number;

  @ApiProperty({ example: true, description: 'Есть ли следующая страница' })
  hasNext: boolean;

  @ApiProperty({ example: false, description: 'Есть ли предыдущая страница' })
  hasPrevious: boolean;

  constructor(total: number, page: number, limit: number) {
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = Math.ceil(total / limit);
    this.hasNext = page < this.totalPages;
    this.hasPrevious = page > 1;
  }
}

export class PaginatedResponseDto<T> {
  @ApiProperty({ description: 'Массив данных' })
  items: T[];

  @ApiProperty({
    type: PaginationMetaDto,
    description: 'Мета-информация о пагинации',
  })
  meta: PaginationMetaDto;

  constructor(items: T[], total: number, page: number, limit: number) {
    this.items = items;
    this.meta = new PaginationMetaDto(total, page, limit);
  }
}
