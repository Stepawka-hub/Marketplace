import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProductEntity } from '@/modules/product/entities';
import { UserEntity } from '@/modules/user/entities';
import { BidEntity } from '@/modules/bid/entities';
import { LOT_API_PROPERTIES } from '../../constants';
import { COMMON_API_PROPERTIES } from '@/common';

export class LotResponseDto {
  @ApiProperty(LOT_API_PROPERTIES.ID)
  id: string;

  @ApiProperty({ type: () => ProductEntity })
  product: ProductEntity;

  @ApiProperty(LOT_API_PROPERTIES.START_PRICE)
  startPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.CURRENT_PRICE)
  currentPrice: number;

  @ApiProperty(LOT_API_PROPERTIES.MIN_BID_INCREMENT)
  minBidIncrement: number;

  @ApiProperty(LOT_API_PROPERTIES.START_PRICE)
  startTime: Date;

  @ApiProperty(LOT_API_PROPERTIES.END_TIME)
  endTime: Date;

  @ApiProperty(LOT_API_PROPERTIES.STATUS)
  status: string;

  @ApiProperty({ type: () => UserEntity })
  seller: UserEntity;

  @ApiPropertyOptional({ type: () => UserEntity })
  winner?: UserEntity;

  @ApiPropertyOptional({ type: () => UserEntity })
  currentWinner?: UserEntity;

  @ApiPropertyOptional({ type: () => [BidEntity] })
  bids?: BidEntity[];

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  createdAt: Date;

  @ApiProperty(COMMON_API_PROPERTIES.UPDATE_DATE)
  updatedAt: Date;
}
