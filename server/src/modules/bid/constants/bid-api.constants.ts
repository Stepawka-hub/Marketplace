import { BID_STATUSES } from './bid.constants';

export const BID_API_PROPERTIES = {
  ID: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID ставки',
  },
  USER_ID: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID пользователя',
  },
  LOT: {
    description: 'Лот, на который сделана ставка',
  },
  LOT_ID: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID лота',
  },
  AMOUNT: {
    example: 15000,
    description: 'Сумма ставки',
  },
  STATUS: {
    example: 'ACTIVE',
    description: 'Статус ставки',
    enum: BID_STATUSES,
  },
};
