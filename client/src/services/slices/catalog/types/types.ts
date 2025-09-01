import { TFilter, TRange } from '@modules/catalog/types';
import { TProduct } from "@types";

export type TCatalogState = {
  products: TProduct[];
  isLoadingProducts: boolean;
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};
