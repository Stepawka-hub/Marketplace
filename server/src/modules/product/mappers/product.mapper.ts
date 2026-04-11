import { formatMediaUrl } from '@/common/utils';
import { ProductEntity } from '@/modules/product/entities';
import {
  ProductDetailsDto,
  ProductListItemDto,
  ProductMediaDto,
} from '@/modules/product/dto';

export class ProductMapper {
  constructor(private readonly baseUrl: string) {}

  toListItem(product: ProductEntity): ProductListItemDto {
    const previewMedia = product.media.find((m) => m.isPreview);
    const preview = this.baseUrl + previewMedia?.filename;

    const { seller } = product;

    return {
      ...product,
      seller: {
        ...seller,
        avatar: formatMediaUrl(seller.avatar, this.baseUrl),
      },
      preview,
    };
  }

  toDetails(product: ProductEntity): ProductDetailsDto {
    const media: ProductMediaDto[] = product.media.map((m) => ({
      url: this.baseUrl + m.filename,
      isPreview: m.isPreview,
    }));

    const { seller } = product;

    return {
      ...product,
      seller: {
        ...seller,
        avatar: formatMediaUrl(seller.avatar, this.baseUrl),
      },
      media,
    };
  }

  toListItemArray(products: ProductEntity[]): ProductListItemDto[] {
    return products.map((product) => this.toListItem(product));
  }
}
