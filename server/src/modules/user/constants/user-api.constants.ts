import { ProductEntity } from '@/modules/product/entities';
import { BidEntity } from '@/modules/bid/entities';
import { LotEntity } from '@/modules/lot/entities';

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
  BALANCE: {
    description: 'Баланс пользователя',
    example: 10000,
    minimum: USER_VALIDATION.BALANCE.MIN,
    maximum: USER_VALIDATION.BALANCE.MAX,
  },
  FROZEN_BALANCE: {
    description: 'Замороженные средства (активные ставки)',
    example: 2500,
    minimum: USER_VALIDATION.FROZEN_BALANCE.MIN,
    maximum: USER_VALIDATION.FROZEN_BALANCE.MAX,
  },
  PRODUCTS: {
    description: 'Список товаров',
    type: () => ProductEntity,
    isArray: true,
  },
  LOTS: {
    description: 'Список лотов продавца',
    type: () => LotEntity,
    isArray: true,
  },
  BIDS: {
    description: 'Список ставок пользователя',
    type: () => BidEntity,
    isArray: true,
  },
  WON_LOTS: {
    description: 'Выигранные лоты',
    type: () => LotEntity,
    isArray: true,
  },
} as const;
