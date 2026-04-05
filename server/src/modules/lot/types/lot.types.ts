import { LOT_STATUSES } from '../constants';

export type TLotStatus = (typeof LOT_STATUSES)[keyof typeof LOT_STATUSES];
