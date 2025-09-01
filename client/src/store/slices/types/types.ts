import { TCartProduct, TFilter, TProduct, TRange } from "@/shared/types";

export type TCatalogState = {
  products: TProduct[];
  isLoadingProducts: boolean;
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};

export type TFavoritesState = {
  favoriteItems: TProduct[];
  isLoading: boolean;
};

export type TCartState = {
  cartItems: TCartProduct[];
  selectedIds: string[];
  isLoading: boolean;
};
