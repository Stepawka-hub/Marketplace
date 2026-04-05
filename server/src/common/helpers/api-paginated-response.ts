import { TApiPaginatedResponse } from '../types';

export class ApiPaginatedResponse {
  static success<T, E = object>(
    items: T[],
    total: number,
    page: number,
    limit: number,
    message: string = 'Успешно',
    extraData?: E,
  ): TApiPaginatedResponse<T, E> {
    const totalPages = Math.ceil(total / limit);

    return {
      message,
      data: {
        items,
        meta: {
          total,
          page,
          limit,
          totalPages,
          hasNext: page < totalPages,
          hasPrevious: page > 1,
        },
        ...extraData,
      } as TApiPaginatedResponse<T, E>['data'],
    };
  }

  static error(message: string = 'Ошибка'): TApiPaginatedResponse<null> {
    return {
      message,
      data: {
        items: [],
        meta: {
          total: 0,
          page: 1,
          limit: 10,
          totalPages: 0,
          hasNext: false,
          hasPrevious: false,
        },
      },
    };
  }
}
