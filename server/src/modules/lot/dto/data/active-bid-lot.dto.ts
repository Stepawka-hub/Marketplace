import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '@/modules/product/entities';

export class ActiveBidLotDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ type: () => ProductEntity })
  product: ProductEntity;

  @ApiProperty({ example: 15000 })
  currentPrice: number;

  @ApiProperty({ example: 12000 })
  yourBid: number;

  @ApiProperty({ example: '2024-01-07T20:00:00Z' })
  endTime: Date;

  @ApiProperty({ example: true })
  isLeading: boolean;

  @ApiProperty({ example: 3 })
  yourBidsCount: number;
}
