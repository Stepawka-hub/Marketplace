import { TProductListItem } from "@/shared/types";

export type TProductCardProps = {
  product: TProductListItem;
  isInCart: boolean;
  isInFavorites: boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
