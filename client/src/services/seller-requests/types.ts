import { TSellerRegistrationType, TSellerRequestStatus } from "@/shared/types";

export type TCreateSellerRequestPayload = {
  registrationType: TSellerRegistrationType;
  companyName: string;
  inn: string;
  phone: string;
  email: string;
  description?: string;
};

export type TUpdateSellerRequestPayload = {
  id: string;
  status: TSellerRequestStatus;
  rejectionReason?: string;
};
