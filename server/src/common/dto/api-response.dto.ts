import { ApiProperty } from '@nestjs/swagger';
import { TApiResponse } from '../types';

export class ApiResponseDto<T = unknown> implements TApiResponse<T> {
  @ApiProperty({ description: 'Данные ответа' })
  data: T;

  @ApiProperty({
    example: 'Список успешно получен',
    description: 'Сообщение о результате',
    required: false,
  })
  message?: string;

  @ApiProperty({
    example: '2024-01-20T12:00:00.000Z',
    description: 'Временная метка',
  })
  timestamp: string;

  @ApiProperty({
    example: 200,
    description: 'HTTP статус код',
  })
  statusCode: number;
}
