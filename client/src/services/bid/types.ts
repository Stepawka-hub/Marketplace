import { TBid } from "@/shared/types";
import { TPaginatedData } from "../base";

export type TBidListResponse = TPaginatedData<TBid>;

export type TPlaceBidPayload = {
  lotId: string;
  amount: number;
};
