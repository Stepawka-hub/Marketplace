import { TApiPropertyOptions } from '@/common';

export const AUTH_API_PROPERTIES: TApiPropertyOptions = {
  ACCESS_TOKEN: {
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  },
} as const;
