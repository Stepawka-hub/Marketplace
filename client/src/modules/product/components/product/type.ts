import { TProductData } from "@types";

export type ProductProps = {
  id: string;
  isInCart: boolean;
  isInFavorites: boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
