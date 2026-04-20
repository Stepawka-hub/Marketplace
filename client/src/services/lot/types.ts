import {
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import {
  TBidLotItem,
  TLotDetails,
  TLotListItem,
  TLotStatus,
} from "@/shared/types";

export type TGetLotsParams = TPaginationParams & {
  search?: string;
  status?: TLotStatus[];
  minPrice?: number;
  maxPrice?: number;
};

export type TCreateLotRequest = {
  productId: string;
  startPrice: number;
  minBidIncrement: number;
  endTime: string;
};

export type TCreateLotResponse = TServerResponse<TLotDetails>;

export type TLotsResponse = TPaginatedResponse<TLotListItem>["data"];

export type TBidLotsResponse = TPaginatedResponse<TBidLotItem>["data"];

export type TActiveBidsCountResponse = TServerResponse<number>;
