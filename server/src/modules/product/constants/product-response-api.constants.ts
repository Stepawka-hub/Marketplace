import { TApiPropertyOptions } from '@/common';
import { ProductMediaDto, ProductSellerDto } from '../dto';

export const PRODUCT_RESPONSE_API_PROPERTIES: TApiPropertyOptions = {
  SELLER: {
    description: 'Продавец товара',
    type: ProductSellerDto,
  },
  MEDIA: {
    description: 'Список изображений и видео (URL)',
    type: ProductMediaDto,
    isArray: true,
  },
} as const;
