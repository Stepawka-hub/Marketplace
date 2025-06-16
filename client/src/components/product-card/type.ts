import { TProduct } from "@types";

export type ProductCardProps = {
  product: TProduct;
  isInCart: boolean;
  isInFavorites: boolean;
  addToCart: (p: TProduct) => void;
  toggleFavorite: (p: TProduct) => void;
};
