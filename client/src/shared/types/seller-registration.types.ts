import { REGISTRATION_STATUSES, REGISTRATION_TYPES } from "../constants";
import { TShortUserData } from "./user.types";

export type TSellerRegistrationType =
  (typeof REGISTRATION_TYPES)[keyof typeof REGISTRATION_TYPES];

export type TSellerRequestStatus =
  (typeof REGISTRATION_STATUSES)[keyof typeof REGISTRATION_STATUSES];

export type TSellerRequest = {
  id: string;
  userId: string;
  registrationType: TSellerRegistrationType;
  companyName: string;
  inn: string;
  phone: string;
  email: string;
  description?: string;
  status: TSellerRequestStatus;
  rejectionReason?: string;
  user?: TShortUserData;
  createdAt: string;
  updatedAt: string;
};
