import { BID_STATUSES } from '../constants';

export type TBidStatus = (typeof BID_STATUSES)[keyof typeof BID_STATUSES];
