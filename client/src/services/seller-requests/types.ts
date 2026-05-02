import {
  TSellerRegistrationType,
  TSellerRequest,
  TSellerRequestStatus,
} from "@/shared/types";
import { TPaginatedResponse } from "../base";

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

export type TLatestRequestStatusResponse = {
  hasRequest: boolean;
  id?: string;
  status?: TSellerRequestStatus;
  rejectionReason?: string;
  createdAt?: string;
};

export type TSellerRequestsResponse =
  TPaginatedResponse<TSellerRequest>["data"];
