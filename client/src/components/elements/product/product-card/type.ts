import { TProductOld, TProductActions } from "@/shared/types";

export type ProductCardProps = Pick<
  TProductActions,
  "addToCart" | "toggleFavorite"
> & {
  product: TProductOld;
  isInCart: boolean;
  isInFavorites: boolean;
};
