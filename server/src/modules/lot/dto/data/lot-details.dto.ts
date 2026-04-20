import { ApiProperty } from '@nestjs/swagger';
import { ProductDetailsDto } from '@/modules/product/dto';
import { CurrentWinnerDto } from './current-winner.dto';
import { LOT_STATUSES } from '../../constants';
import { TLotStatus } from '../../types';

export class LotDetailsDto {
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
  product: ProductDetailsDto;

  @ApiProperty({ nullable: true, type: () => CurrentWinnerDto })
  currentWinner: CurrentWinnerDto | null;

  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
