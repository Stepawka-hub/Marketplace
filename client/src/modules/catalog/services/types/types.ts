import { TCategory, TProduct } from "@types";

export type TCatalogState = {
  products: TProduct[];
  searchQuery: string;
  filters: TFilter;
};

export type TFilter = {
  price: TPrice;
  category: TCategory;
};

export type TPrice = {
  min: number;
  max: number;
};
