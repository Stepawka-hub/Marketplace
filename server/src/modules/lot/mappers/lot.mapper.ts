import { formatMediaUrl } from '@/common/utils';
import { ProductMapper } from '@/modules/product/mappers';
import { LotEntity } from '../entities';
import { LotListItemDto, LotDetailsDto } from '../dto';

export class LotMapper {
  public readonly productMapper: ProductMapper;

  constructor(private readonly baseUrl: string) {
    this.productMapper = new ProductMapper(this.baseUrl);
  }

  toListItem(lot: LotEntity): LotListItemDto {
    return {
      id: lot.id,
      startPrice: lot.startPrice,
      minBidIncrement: lot.minBidIncrement,
      startTime: lot.startTime,
      endTime: lot.endTime,
      status: lot.status,
      currentPrice: lot.currentPrice,
      createdAt: lot.createdAt,
      updatedAt: lot.updatedAt,
      product: this.productMapper.toListItem(lot.product),
    };
  }

  toDetails(lot: LotEntity): LotDetailsDto {
    return {
      id: lot.id,
      startPrice: lot.startPrice,
      minBidIncrement: lot.minBidIncrement,
      startTime: lot.startTime,
      endTime: lot.endTime,
      status: lot.status,
      currentPrice: lot.currentPrice,
      product: this.productMapper.toDetails(lot.product),
      currentWinner: lot.currentWinner
        ? {
            id: lot.currentWinner.id,
            firstName: lot.currentWinner.firstName,
            lastName: lot.currentWinner.lastName,
            avatar: formatMediaUrl(lot.currentWinner.avatar, this.baseUrl),
          }
        : null,
      createdAt: lot.createdAt,
      updatedAt: lot.updatedAt,
    };
  }

  toListItemArray(lots: LotEntity[]): LotListItemDto[] {
    return lots.map((lot) => this.toListItem(lot));
  }
}
