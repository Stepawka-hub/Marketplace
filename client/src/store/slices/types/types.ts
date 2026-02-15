import { TCartProduct, TFilter, TRange } from "@/shared/types";

export type TCatalogState = {
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
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
