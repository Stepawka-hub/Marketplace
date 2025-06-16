import { TProductData } from "@types";

export type TProductActions = {
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
