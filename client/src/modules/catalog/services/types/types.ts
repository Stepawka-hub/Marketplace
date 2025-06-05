import { TProduct } from "@types";

export type TCatalogState = {
  products: TProduct[];
  categories: string[];
  searchQuery: string;
  filters: TFilter;
};

export type TFilter = {
  price: TPrice;
  category: string;
};

export type TPrice = {
  min: number;
  max: number;
};
