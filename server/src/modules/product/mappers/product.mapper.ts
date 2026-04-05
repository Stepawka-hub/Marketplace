import {
  ProductDetailsDto,
  ProductListItemDto,
  ProductMediaDto,
} from '@/modules/product/dto';
import { ProductEntity } from '@/modules/product/entities';

export class ProductMapper {
  constructor(private readonly mediaBaseUrl: string) {}

  toListItem(product: ProductEntity): ProductListItemDto {
    const previewMedia = product.media.find((m) => m.isPreview);
    const preview = this.mediaBaseUrl + previewMedia?.filename;

    return {
      ...product,
      preview,
    };
  }

  toDetails(product: ProductEntity): ProductDetailsDto {
    const media: ProductMediaDto[] = product.media.map((m) => ({
      url: this.mediaBaseUrl + m.filename,
      isPreview: m.isPreview,
    }));

    return {
      ...product,
      media,
    };
  }

  toListItemArray(products: ProductEntity[]): ProductListItemDto[] {
    return products.map((product) => this.toListItem(product));
  }
}
