import { TCartProduct } from "@types";

export type TCartState = {
  products: TCartProduct[];
  selectedIds: string[];
  isLoadingProducts: boolean;
};
