import { TApiPropertyOptions } from '@/common';
import { ProductImageEntity } from '../entities';
import { UserEntity } from '@/modules/user';

export const PRODUCT_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID продукта',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  NAME: {
    description: 'Название продукта',
    example: 'Наушники',
    // minLength: VALIDATION.NAME.MIN,
    // maxLength: VALIDATION.NAME.MAX,
  },
  SHORT_DESCRIPTION: {
    description: 'Короткое описание',
    example:
      'Идеальный звук для музыки, игр и звонков. Эргономичный дизайн и комфорт для долгого ношения. Погрузитесь в мир чистого звука!',
    // minLength: VALIDATION.NAME.MIN,
    // maxLength: VALIDATION.NAME.MAX,
  },
  DESCRIPTION: {
    description: 'Описание',
    example: `Эти наушники созданы для тех, кто ценит качественный звук и комфорт в повседневной жизни. Они воспроизводят чистый и сбалансированный звук с детальными высокими частотами и насыщенными басами, что позволяет по-новому услышать любимые треки.`,
    required: false,
    // minLength: VALIDATION.NAME.MIN,
    // maxLength: VALIDATION.NAME.MAX,
  },
  CATEGORY: {
    description: 'Категория',
    example: 'Наушники',
    // minLength: VALIDATION.NAME.MIN,
    // maxLength: VALIDATION.NAME.MAX,
  },
  PRICE: {
    description: 'Цена',
    example: 10000.0,
    type: 'number',
    format: 'float',
    minimum: 0,
    multipleOf: 0.01,
  },
  RATING: {
    description: 'Рейтинг',
    example: 4.65,
    type: 'number',
    format: 'float',
    minimum: 0,
    multipleOf: 0.01,
  },
  IMAGES: {
    description: 'Изображения товара',
    type: () => ProductImageEntity,
    isArray: true,
  },
  // Todo: Скорректировать, какие поля будут приходить вместе с товаром
  OWNER: {
    description: 'Владелец товара',
    type: () => UserEntity,
  },
} as const;
