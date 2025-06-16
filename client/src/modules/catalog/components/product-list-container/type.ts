import { TProduct } from "@types";

export type ProductListContainerProps = {
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProduct) => void;
  toggleFavorite: (p: TProduct) => void;
};
