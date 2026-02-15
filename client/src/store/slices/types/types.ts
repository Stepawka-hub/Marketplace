import { TCartProduct, TFilter, TProductDetails, TRange } from "@/shared/types";

export type TCatalogState = {
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};

export type TFavoritesState = {
  favoriteItems: TProductDetails[];
  isLoading: boolean;
};

export type TCartState = {
  cartItems: TCartProduct[];
  selectedIds: string[];
  isLoading: boolean;
};

export type TProfileState = {
  isAuthChecked: boolean;
  isAuth: boolean;
};
