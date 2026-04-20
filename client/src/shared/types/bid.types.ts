import { BID_STATUSES } from "../constants";
import { TShortUserData } from "./user.types";

export type TBidStatus = (typeof BID_STATUSES)[keyof typeof BID_STATUSES];

export type TBid = {
  id: string;
  amount: number;
  status: TBidStatus;
  user: TShortUserData;
  createdAt: string;
};
