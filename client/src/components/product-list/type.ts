import { TProduct } from "@types";

export type ProductListProps = {
  products: TProduct[];
  isLoading: boolean;
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProduct) => void;
  toggleFavorite: (p: TProduct) => void;
};
