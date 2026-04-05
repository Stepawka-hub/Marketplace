import { TApiPropertyOptions } from '@/common';
import { ProductEntity } from '@/modules/product/entities';
import { UserEntity } from '@/modules/user/entities';

export const FAVORITES_API_PROPERTIES: TApiPropertyOptions = {
  USER: {
    description: 'Пользователь',
    type: () => UserEntity,
  },
  PRODUCT: {
    description: 'Товар',
    type: () => ProductEntity,
  },
} as const;
