import { TProduct } from "@types";

export type TCatalogState = {
  products: TProduct[];
  categories: string[];
  priceRange: TRange;
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

export type TRange = {
  min: number,
  max: number;
};
