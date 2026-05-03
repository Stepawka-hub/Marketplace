import { REGISTRATION_TYPES, SELLER_REQUEST_STATUSES } from '../constants';

export type TRegistrationType =
  (typeof REGISTRATION_TYPES)[keyof typeof REGISTRATION_TYPES];

export type TSellerRequestStatus =
  (typeof SELLER_REQUEST_STATUSES)[keyof typeof SELLER_REQUEST_STATUSES];
