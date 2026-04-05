import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities';
import { BID_API_PROPERTIES } from '../../constants';
import { COMMON_API_PROPERTIES } from '@/common';

export class BidDetailsDto {
  @ApiProperty(BID_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(BID_API_PROPERTIES.AMOUNT)
  amount: number;

  @ApiProperty(BID_API_PROPERTIES.STATUS)
  status: string;

  @ApiProperty(COMMON_API_PROPERTIES.CREATE_DATE)
  createdAt: Date;

  @ApiProperty({ type: () => UserEntity })
  user: Pick<UserEntity, 'id' | 'firstName' | 'lastName'>;
}
