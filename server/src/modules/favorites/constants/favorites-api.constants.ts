import { TApiPropertyOptions } from '@/common';
import { LotEntity } from '@/modules/lot/entities';
import { UserEntity } from '@/modules/user/entities';

export const FAVORITES_API_PROPERTIES: TApiPropertyOptions = {
  USER: {
    description: 'Пользователь',
    type: () => UserEntity,
  },
  LOT: {
    description: 'Лот',
    type: () => LotEntity,
  },
} as const;
