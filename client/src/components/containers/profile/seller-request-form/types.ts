import { TSellerRegistrationType } from "@/shared/types";

export type TSellerRequestForm = {
  registrationType: TSellerRegistrationType;
  companyName: string;
  inn: string;
  phone: string;
  email: string;
  description?: string;
  agreement: boolean;
};
