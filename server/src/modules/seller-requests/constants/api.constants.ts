import { UserEntity } from '@/modules/user/entities';
import {
  REGISTRATION_TYPES,
  SELLER_REQUEST_STATUSES,
} from './seller-request.constants';

export const SELLER_REQUEST_API_PROPERTIES = {
  ID: {
    description: 'Уникальный идентификатор заявки',
    example: '123e4567-e89b-12d3-a456-426614174000',
  },
  USER_ID: {
    description: 'ID пользователя, подавшего заявку',
    example: '123e4567-e89b-12d3-a456-426614174000',
  },
  USER: {
    description: 'Пользователь, подавший заявку',
    type: () => UserEntity,
  },
  REGISTRATION_TYPE: {
    description: 'Тип регистрации',
    enum: REGISTRATION_TYPES,
    example: REGISTRATION_TYPES.IP,
  },
  COMPANY_NAME: {
    description: 'Название компании',
    example: 'ООО "Ромашка"',
  },
  INN: {
    description: 'ИНН компании',
    example: '123456789012',
  },
  PHONE: {
    description: 'Контактный телефон',
    example: '+7 (999) 123-45-67',
  },
  EMAIL: {
    description: 'Email для связи',
    example: 'shop@example.com',
  },
  DESCRIPTION: {
    description: 'Дополнительная информация о компании',
    example: 'Занимаемся продажей электроники с 2010 года',
    required: false,
  },
  STATUS: {
    description: 'Статус заявки',
    enum: SELLER_REQUEST_STATUSES,
    example: SELLER_REQUEST_STATUSES.PENDING,
    default: SELLER_REQUEST_STATUSES.PENDING,
  },
  REJECTION_REASON: {
    description: 'Причина отклонения заявки',
    example: 'Неверно указан ИНН',
    required: false,
  },
} as const;
