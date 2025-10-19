import { ProductEntity } from '@/modules/product/entities';
import { USER_ROLES } from './user.constants';
import { USER_VALIDATION } from './user-validation.constants';
import { TApiPropertyOptions } from '@/common';

export const USER_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID пользователя',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  EMAIL: {
    description: 'Email',
    example: 'user@example.com',
    minLength: USER_VALIDATION.EMAIL.MIN,
    maxLength: USER_VALIDATION.EMAIL.MAX,
  },
  PHONE: {
    description: 'Номер телефона',
    example: '88005555353',
    minLength: USER_VALIDATION.PHONE.MIN,
    maxLength: USER_VALIDATION.PHONE.MAX,
  },
  FIRST_NAME: {
    description: 'Имя пользователя',
    example: 'Степан',
    minLength: USER_VALIDATION.NAME.MIN,
    maxLength: USER_VALIDATION.NAME.MAX,
  },
  LAST_NAME: {
    description: 'Фамилия пользователя',
    example: 'Львов',
    minLength: USER_VALIDATION.NAME.MIN,
    maxLength: USER_VALIDATION.NAME.MAX,
  },
  PASSWORD: {
    description: 'Пароль пользователя',
    example: 'qwerty123456',
    minLength: USER_VALIDATION.PASSWORD.MIN,
    maxLength: USER_VALIDATION.PASSWORD.MAX,
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
