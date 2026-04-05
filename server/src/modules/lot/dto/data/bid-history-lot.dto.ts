import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from '@/modules/product/entities';

export class BidHistoryLotDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ type: () => ProductEntity })
  product: ProductEntity;

  @ApiProperty({ example: 15000 })
  finalPrice: number;

  @ApiProperty({ example: 12000 })
  yourLastBid: number;

  @ApiProperty({ enum: ['WINNING', 'LOST', 'EXPIRED'] })
  result: 'WINNING' | 'LOST' | 'EXPIRED';

  @ApiProperty({ example: '2024-01-07T20:00:00Z' })
  endedAt: Date;

  @ApiProperty({ example: 5 })
  yourBidsCount: number;
}
