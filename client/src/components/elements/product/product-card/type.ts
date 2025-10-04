import { TProduct, TProductActions } from "@/shared/types";

export type ProductCardProps = Pick<
  TProductActions,
  "addToCart" | "toggleFavorite"
> & {
  product: TProduct;
  isInCart: boolean;
  isInFavorites: boolean;
};
