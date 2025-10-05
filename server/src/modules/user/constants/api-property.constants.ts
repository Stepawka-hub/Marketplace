import { ProductEntity } from '@/modules/product';
import { USER_ROLES } from './user.constants';
import { VALIDATION } from './validation.constants';

export const API_PROPERTY = {
  ID: {
    description: 'UUID пользователя',
    example: 'a1b2c3d4-e5f6-7890',
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
  CREATE_DATE: {
    description: 'Дата создания',
    example: '2025-10-05 15:34:15.642024',
  },
  UPDATE_DATE: {
    description: 'Дата обновления',
    example: '2025-10-05 15:39:15.942054',
  },
} as const;
