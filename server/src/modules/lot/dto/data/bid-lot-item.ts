import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '@/modules/product/entities';
import { TLotStatus } from '../../types';
import { LOT_API_PROPERTIES } from '../../constants';

export class BidLotItemDto {
  @ApiProperty(LOT_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(LOT_API_PROPERTIES.STATUS)
  status: TLotStatus;

  @ApiProperty(LOT_API_PROPERTIES.PRODUCT)
  product: ProductEntity;

  @ApiProperty(LOT_API_PROPERTIES.CURRENT_PRICE)
  currentPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.END_TIME)
  endTime: Date;

  @ApiProperty({ example: true })
  isLeading: boolean;
}
