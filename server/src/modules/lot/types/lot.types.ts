import { ProductListItemDto } from '@/modules/product/dto';
import { BID_HISTORY_RESULTS, LOT_STATUSES } from '../constants';

export type TLotStatus = (typeof LOT_STATUSES)[keyof typeof LOT_STATUSES];

export type TBidHistoryResult =
  (typeof BID_HISTORY_RESULTS)[keyof typeof BID_HISTORY_RESULTS];

export type TBidLotItem = {
  id: string;
  status: TLotStatus;
  product: ProductListItemDto;
  currentPrice: number;
  endTime: Date;
  isLeading: boolean;
};
