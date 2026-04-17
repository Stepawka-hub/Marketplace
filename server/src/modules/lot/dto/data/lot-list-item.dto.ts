import { ApiProperty } from '@nestjs/swagger';
import { LOT_STATUSES } from '../../constants';
import { TLotStatus } from '../../types';
import { ProductListItemDto } from '@/modules/product/dto';

export class LotListItemDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  startPrice: number;

  @ApiProperty()
  minBidIncrement: number;

  @ApiProperty({ enum: LOT_STATUSES })
  status: TLotStatus;

  @ApiProperty()
  currentPrice: number;

  @ApiProperty()
  product: ProductListItemDto;

  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
