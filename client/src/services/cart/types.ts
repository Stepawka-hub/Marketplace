import { TCartItem } from "@/shared/types";
import { TPaginatedResponse, TServerResponse } from "../base";

export type TCartExtraData = {
  totalPrice: number;
};

export type TCartResponse = TPaginatedResponse<TCartItem, TCartExtraData>;

export type TCartActionData = {
  productId: string;
  count: number;
};

export type TCartActionResponse = TServerResponse<TCartActionData>;

export type TCartTotalPriceResponse = TServerResponse<number>;

export type TCartCountResponse = TServerResponse<number>;

export type TCartDeleteResponse = TServerResponse<null>;

export type TCartSelectResponse = TServerResponse<boolean>;

export type TAddToCartPayload = {
  productId: string;
  count?: number;
};

export type TUpdateCartItemPayload = {
  productId: string;
  count: number;
};

export type TSelectCartItemPayload = {
  productId: string;
  isSelected: boolean;
};

export type TSelectAllCartItemsPayload = {
  isSelected: boolean;
};
