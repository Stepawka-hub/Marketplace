export const LOT_API_PROPERTIES = {
  ID: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID лота',
  },
  PRODUCT: {
    description: 'Товар, который продаётся',
  },
  START_PRICE: {
    example: 1000,
    description: 'Начальная цена',
  },
  CURRENT_PRICE: {
    example: 2500,
    description: 'Текущая цена (после ставок)',
  },
  MIN_BID_INCREMENT: {
    example: 100,
    description: 'Минимальный шаг ставки',
  },
  START_TIME: {
    example: '2024-01-01T10:00:00Z',
    description: 'Время начала',
  },
  END_TIME: {
    example: '2024-01-07T20:00:00Z',
    description: 'Время окончания',
  },
  STATUS: {
    example: 'ACTIVE',
    description: 'Статус лота',
    enum: ['DRAFT', 'ACTIVE', 'COMPLETED', 'CANCELLED', 'EXPIRED'],
  },
  WINNER: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Победитель аукциона',
  },
  CURRENT_WINNER: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Текущий лидер (пользователь с максимальной ставкой)',
  },
  SELLER: {
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Продавец',
  },
  BIDS: {
    description: 'Список ставок',
  },
};
