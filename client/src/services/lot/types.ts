import { TPaginatedResponse, TServerResponse } from "../base";
import { TBidLotItem, TLotDetails, TLotListItem } from "@/shared/types";

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
