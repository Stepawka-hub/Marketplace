import { TProductDetails, TProductListItem } from "./product.types";

export type TLotStatus =
  | "DRAFT"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"
  | "EXPIRED";

export const LOT_STATUSES: Record<string, TLotStatus> = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
} as const;

// Todo: надо ли?
export const LOT_STATUS_LABELS: Record<TLotStatus, string> = {
  DRAFT: "Черновик",
  ACTIVE: "Активен",
  COMPLETED: "Завершён",
  CANCELLED: "Отменён",
  EXPIRED: "Истёк",
};

export type TLotBase = {
  id: string;
  startPrice: number;
  minBidIncrement: number;
  startTime: string;
  endTime: string;
  status: TLotStatus;
  currentPrice?: number;
  createdAt: string;
  updatedAt: string;
};

export type TLotDetails = TLotBase & {
  productId: string;
  product: TProductDetails;
};

export type TLotListItem = TLotBase & {
  product: TProductListItem;
};
