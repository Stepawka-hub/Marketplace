import { PAYMENT_STATUSES } from '../constants';

export type TPaymentStatus =
  (typeof PAYMENT_STATUSES)[keyof typeof PAYMENT_STATUSES];
