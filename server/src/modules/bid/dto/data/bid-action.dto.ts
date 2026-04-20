import { ApiProperty } from '@nestjs/swagger';
import { BID_API_PROPERTIES } from '../../constants';
import { LOT_API_PROPERTIES } from '@/modules/lot/constants';

export class BidActionDataDto {
  @ApiProperty(BID_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(LOT_API_PROPERTIES.ID)
  lotId: string;

  @ApiProperty(BID_API_PROPERTIES.AMOUNT)
  amount: number;

  @ApiProperty(BID_API_PROPERTIES.STATUS)
  status: string;
}
