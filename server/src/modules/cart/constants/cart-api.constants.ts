import { TApiPropertyOptions } from '@/common';
import { ProductEntity } from '@/modules/product/entities';
import { UserEntity } from '@/modules/user/entities';

export const CART_API_PROPERTIES: TApiPropertyOptions = {
  COUNT: {
    description: 'Количество товара',
    example: 2,
    minimum: 1,
    default: 1,
    type: 'integer',
  },
  IS_SELECTED: {
    description: 'Выбран ли товар',
    example: true,
    type: 'boolean',
  },
  USER: {
    description: 'Информация о пользователе',
    type: () => UserEntity,
  },
  PRODUCT: {
    description: 'Информация о товаре',
    type: () => ProductEntity,
  },
} as const;
