import { BID_STATUSES } from '@/modules/bid/constants';

export const LOT_STATUSES = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED',
} as const;

export const BID_HISTORY_RESULTS = {
  WINNING: BID_STATUSES.WINNING,
  LOST: BID_STATUSES.LOST,
} as const;
