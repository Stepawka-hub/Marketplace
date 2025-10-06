import { ProductEntity } from '@/modules/product';
import { USER_ROLES } from './user.constants';
import { VALIDATION } from './validation.constants';
import { TApiPropertyOptions } from '@/common';

export const USER_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID пользователя',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  EMAIL: {
    description: 'Email',
    example: 'user@example.com',
    minLength: VALIDATION.EMAIL.MIN,
    maxLength: VALIDATION.EMAIL.MAX,
  },
  PHONE: {
    description: 'Номер телефона',
    example: '88005555353',
    minLength: VALIDATION.PHONE.MIN,
    maxLength: VALIDATION.PHONE.MAX,
  },
  FIRST_NAME: {
    description: 'Имя пользователя',
    example: 'Степан',
    minLength: VALIDATION.NAME.MIN,
    maxLength: VALIDATION.NAME.MAX,
  },
  LAST_NAME: {
    description: 'Фамилия пользователя',
    example: 'Львов',
    minLength: VALIDATION.NAME.MIN,
    maxLength: VALIDATION.NAME.MAX,
  },
  AVATAR: {
    description: 'Аватар',
    example: 'https://storage.example.com/avatars/123456',
  },
  ROLE: {
    description: 'Роль пользователя',
    example: USER_ROLES.USER,
  },
  PRODUCTS: {
    description: 'Список товаров',
    type: () => ProductEntity,
    isArray: true,
  },
} as const;
