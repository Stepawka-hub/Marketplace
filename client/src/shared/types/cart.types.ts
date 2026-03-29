import { TProductListItem } from "./product.types";

export type TCartItem = {
  count: number;
  product: TProductListItem;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
};
