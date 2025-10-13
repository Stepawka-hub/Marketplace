import { TApiPropertyOptions } from '@/common';
import { ProductMediaEntity } from '../entities';
import { UserEntity } from '@/modules/user';
import { VALIDATION } from './validation.constants';

export const PRODUCT_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID продукта',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  NAME: {
    description: 'Название продукта',
    example: 'Наушники',
    minLength: VALIDATION.NAME.MIN,
    maxLength: VALIDATION.NAME.MAX,
  },
  SHORT_DESCRIPTION: {
    description: 'Короткое описание',
    example:
      'Идеальный звук для музыки, игр и звонков. Эргономичный дизайн и комфорт для долгого ношения. Погрузитесь в мир чистого звука!',
    minLength: VALIDATION.SHORT_DESCRIPTION.MIN,
    maxLength: VALIDATION.SHORT_DESCRIPTION.MAX,
  },
  DESCRIPTION: {
    description: 'Описание',
    example: `Эти наушники созданы для тех, кто ценит качественный звук и комфорт в повседневной жизни. Они воспроизводят чистый и сбалансированный звук с детальными высокими частотами и насыщенными басами, что позволяет по-новому услышать любимые треки.`,
    required: false,
    minLength: VALIDATION.DESCRIPTION.MIN,
    maxLength: VALIDATION.DESCRIPTION.MAX,
  },
  CATEGORY: {
    description: 'Категория',
    example: 'Наушники',
    minLength: VALIDATION.CATEGORY.MIN,
    maxLength: VALIDATION.CATEGORY.MAX,
  },
  PRICE: {
    description: 'Цена',
    example: 10000.0,
    type: 'number',
    format: 'float',
    minimum: VALIDATION.PRICE.MIN,
    maximum: VALIDATION.PRICE.MAX,
    multipleOf: 0.01,
  },
  RATING: {
    description: 'Рейтинг',
    example: 4.65,
    type: 'number',
    format: 'float',
    default: VALIDATION.RATING.DEFAULT,
    minimum: VALIDATION.RATING.MIN,
    maximum: VALIDATION.RATING.MAX,
    multipleOf: 0.01,
  },
  MEDIA: {
    description: 'Фото/видео товара',
    type: () => ProductMediaEntity,
    isArray: true,
  },
  // Todo: Скорректировать, какие поля будут приходить вместе с товаром
  OWNER: {
    description: 'Владелец товара',
    type: () => UserEntity,
  },
} as const;
