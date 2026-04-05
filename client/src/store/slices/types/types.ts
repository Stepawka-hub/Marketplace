import { TFilter, TRange } from "@/shared/types";

export type TCartState = {
  selectedIds: string[];
};

export type TCatalogState = {
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};

export type TProfileState = {
  isAuthChecked: boolean;
  isAuth: boolean;
};
