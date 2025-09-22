import { TProductDetails } from "@/shared/types";

export type TProductDetailsUIProps = {
  product: TProductDetails;
  isInCart: boolean;
  isInFavorites: boolean;
  addToCart: () => void;
  toggleFavorite: () => void;
};
