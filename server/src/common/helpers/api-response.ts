import { TApiResponse } from '../types';

export class ApiResponse {
  static success<T>(data: T, message?: string): TApiResponse<T> {
    return { data, message };
  }

  static created<T>(data: T, message?: string): TApiResponse<T> {
    return { data, message };
  }

  static deleted(message = 'Успешно удалено'): TApiResponse<null> {
    return { data: null, message };
  }
}
