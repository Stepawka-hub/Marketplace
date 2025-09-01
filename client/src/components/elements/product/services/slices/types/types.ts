import { TReview } from "@modules/product/types";
import { TProduct } from "@types";

export type TProductState = {
  product: TProduct | null;
  reviews: TReview[];
};
