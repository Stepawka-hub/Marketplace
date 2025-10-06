import { TApiPropertyOptions } from '../types';

export const COMMON_API_PROPERTIES: TApiPropertyOptions = {
  CREATE_DATE: {
    description: 'Дата создания',
    example: '2025-10-05 15:34:15.642024',
  },
  UPDATE_DATE: {
    description: 'Дата обновления',
    example: '2025-10-05 15:39:15.942054',
  },
} as const;
