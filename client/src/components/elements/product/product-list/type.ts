import { TProduct, TProductData } from "@/shared/types";

export type TProductListUIProps = {
  products: TProduct[];
  isLoading: boolean;
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
