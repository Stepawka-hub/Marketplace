import { formatMediaUrl } from '@/common/utils';
import { BidDetailsDto } from '../dto';
import { BidEntity } from '../entities';

export class BidMapper {
  constructor(private readonly baseUrl: string) {}

  toDetails(bid: BidEntity): BidDetailsDto {
    return {
      ...bid,
      user: {
        ...bid.user,
        avatar: formatMediaUrl(bid.user.avatar, this.baseUrl),
      },
    };
  }

  toDetailsArray(bids: BidEntity[]) {
    return bids.map((bid) => this.toDetails(bid));
  }
}
