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
  PREVIEW: {
    description: 'URL главного изображения (превью)',
    example:
      'https://storage.example.com/products/media/3c914eccea19fab604902838c363cd1b.jpg',
  },
} as const;
