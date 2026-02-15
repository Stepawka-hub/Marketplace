import { TProductListItem } from "@/shared/types";

export type TProductListUIProps = {
  products: TProductListItem[];
  isLoading: boolean;
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
