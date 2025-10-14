import { MEDIA_TYPE, TApiPropertyOptions } from '@/common';
import { ProductEntity, ProductMediaEntity } from '../entities';
import { UserEntity } from '@/modules/user';
import {
  PRODUCT_MEDIA_VALIDATION,
  PRODUCT_MEDIA_VALIDATION_OPTIONS,
  PRODUCT_VALIDATION,
} from './validation.constants';
import { formatFileSize } from '@/common/utils';

export const PRODUCT_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID товара',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  NAME: {
    description: 'Название товара',
    example: 'Наушники',
    minLength: PRODUCT_VALIDATION.NAME.MIN,
    maxLength: PRODUCT_VALIDATION.NAME.MAX,
  },
  SHORT_DESCRIPTION: {
    description: 'Короткое описание',
    example:
      'Идеальный звук для музыки, игр и звонков. Эргономичный дизайн и комфорт для долгого ношения. Погрузитесь в мир чистого звука!',
    minLength: PRODUCT_VALIDATION.SHORT_DESCRIPTION.MIN,
    maxLength: PRODUCT_VALIDATION.SHORT_DESCRIPTION.MAX,
  },
  DESCRIPTION: {
    description: 'Описание',
    example: `Эти наушники созданы для тех, кто ценит качественный звук и комфорт в повседневной жизни. Они воспроизводят чистый и сбалансированный звук с детальными высокими частотами и насыщенными басами, что позволяет по-новому услышать любимые треки.`,
    required: false,
    minLength: PRODUCT_VALIDATION.DESCRIPTION.MIN,
    maxLength: PRODUCT_VALIDATION.DESCRIPTION.MAX,
  },
  CATEGORY: {
    description: 'Категория',
    example: 'Наушники',
    minLength: PRODUCT_VALIDATION.CATEGORY.MIN,
    maxLength: PRODUCT_VALIDATION.CATEGORY.MAX,
  },
  PRICE: {
    description: 'Цена',
    example: 10000.0,
    type: 'number',
    format: 'float',
    minimum: PRODUCT_VALIDATION.PRICE.MIN,
    maximum: PRODUCT_VALIDATION.PRICE.MAX,
    multipleOf: 0.01,
  },
  RATING: {
    description: 'Рейтинг',
    example: 4.65,
    type: 'number',
    format: 'float',
    default: PRODUCT_VALIDATION.RATING.DEFAULT,
    minimum: PRODUCT_VALIDATION.RATING.MIN,
    maximum: PRODUCT_VALIDATION.RATING.MAX,
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

export const PRODUCT_MEDIA_API_PROPERTIES: TApiPropertyOptions = {
  ID: {
    description: 'UUID медиафайла товара',
    example: 'baa1c774-d4c7-44d3-a712-efbc7414f62c',
  },
  URL: {
    description: 'URL медиафайла',
    example: 'https://storage.example.com/images/123456',
    minLength: PRODUCT_MEDIA_VALIDATION.URL.MIN,
    maxLength: PRODUCT_MEDIA_VALIDATION.URL.MAX,
  },
  FILENAME: {
    description: 'Имя файла',
    example: 'wc1000/7222614601.jpg',
    minLength: PRODUCT_MEDIA_VALIDATION.FILENAME.MIN,
    maxLength: PRODUCT_MEDIA_VALIDATION.FILENAME.MAX,
  },
  IS_PREVIEW: {
    description:
      'Флаг, отвечающий за то, является ли медиафайл обложкой товара',
    example: true,
    required: false,
  },
  TYPE: {
    description: 'Тип медиафайла',
    example: MEDIA_TYPE.IMAGE,
  },
  PRODUCT: {
    description: 'Товар, к которому относится медиафайл',
    type: () => ProductEntity,
  },
} as const;

export const PRODUCT_MEDIA_API_DESCRIPTION =
  `Product media files.<br>` +
  `Required: ${PRODUCT_MEDIA_VALIDATION_OPTIONS.minCount}-${PRODUCT_MEDIA_VALIDATION_OPTIONS.maxCount} files.<br>` +
  `Images: max ${formatFileSize(PRODUCT_MEDIA_VALIDATION_OPTIONS.maxImageSize)}<br>` +
  `Videos: max ${formatFileSize(PRODUCT_MEDIA_VALIDATION_OPTIONS.maxVideoSize)}<br>` +
  `Allowed types: ${PRODUCT_MEDIA_VALIDATION_OPTIONS.allowedMimeTypes.join(', ')}`;
