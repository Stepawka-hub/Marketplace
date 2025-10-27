import {
  TCartProduct,
  TFilter,
  TProductOld,
  TRange,
  TReview,
} from "@/shared/types";

export type TCatalogState = {
  products: TProductOld[];
  isLoadingProducts: boolean;
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};

export type TFavoritesState = {
  favoriteItems: TProductOld[];
  isLoading: boolean;
};

export type TCartState = {
  cartItems: TCartProduct[];
  selectedIds: string[];
  isLoading: boolean;
};

export type TProductState = {
  product: TProductOld | null;
  reviews: TReview[];
};

export type TProfileState = {
  isAuthChecked: boolean;
  isAuth: boolean;
};
