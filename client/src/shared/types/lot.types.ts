import { LOT_STATUSES } from "../constants";
import { TProductDetails, TProductListItem } from "./product.types";
import { TShortUserData } from "./user.types";

export type TLotStatus = (typeof LOT_STATUSES)[keyof typeof LOT_STATUSES];

export type TLotBase = {
  id: string;
  startPrice: number;
  minBidIncrement: number;
  startTime: string;
  endTime: string;
  status: TLotStatus;
  currentPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type TLotDetails = TLotBase & {
  productId: string;
  product: TProductDetails;
  currentWinner: TShortUserData | null;
};

export type TLotListItem = TLotBase & {
  product: TProductListItem;
};

export type TBidLotItem = {
  id: string;
  status: TLotStatus;
  product: TProductListItem;
  currentPrice: number;
  endTime: string;
  isLeading: boolean;
};
