import { TBid } from "@/shared/types";
import { TPaginatedData } from "../base";

export type TBidListResponse = TPaginatedData<TBid>;

export type TPlaceBidPayload = {
  lotId: string;
  amount: number;
};

export type TPlaceAutoBidPayload = {
  lotId: string;
  maxAmount: number;
};

export type TAutoBid = {
  id: string;
  userId: string;
  lotId: string;
  maxAmount: number;
  active: boolean;
  createdAt: string;
};

export type TAutoBidActionPayload = {
  lotId: string;
}