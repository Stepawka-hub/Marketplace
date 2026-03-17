import { TProductListItem } from "@/shared/types";
import { TPaginatedResponse, TServerResponse } from "../base";

export type TCartItem = {
  count: number;
  product: TProductListItem;
  createdAt: string;
  updatedAt: string;
};

export type TCartExtraData = {
  totalPrice: number;
};

export type TCartResponse = TPaginatedResponse<TCartItem, TCartExtraData>;

export type TCartActionData = {
  productId: string;
  count: number;
};

export type TCartActionResponse = TServerResponse<TCartActionData>;

export type TCartCountResponse = TServerResponse<number>;

export type TCartDeleteResponse = TServerResponse<null>;

export type TAddToCartPayload = {
  productId: string;
  count?: number;
};

export type TUpdateCartItemPayload = {
  productId: string;
  count: number;
};
