import {
  TCartProduct,
  TFilter,
  TProduct,
  TRange,
  TReview,
} from "@/shared/types";

export type TCatalogState = {
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

export type TProductState = {
  product: TProduct | null;
  reviews: TReview[];
};

export type TProfileState = {
  isAuthChecked: boolean;
  isAuth: boolean;
};
