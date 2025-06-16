import { TProduct, TProductActions } from "@types";

export type ProductCardProps = Pick<
  TProductActions,
  "addToCart" | "toggleFavorite"
> & {
  product: TProduct;
  isInCart: boolean;
  isInFavorites: boolean;
};
