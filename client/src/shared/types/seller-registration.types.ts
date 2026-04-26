import { REGISTRATION_TYPES } from "../constants";

export type TSellerRegistrationType =
  (typeof REGISTRATION_TYPES)[keyof typeof REGISTRATION_TYPES];
