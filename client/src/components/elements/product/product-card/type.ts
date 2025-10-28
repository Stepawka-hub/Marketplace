import { TProduct, TProductData } from "@/shared/types";

export type ProductCardProps = {
  product: TProduct;
  isInCart: boolean;
  isInFavorites: boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
