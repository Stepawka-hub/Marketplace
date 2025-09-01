import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCatalogState } from "./types";
import { TFilter } from "@modules/catalog/types";
import mockProducts from "@shared/mock/catalog-products.json";

const initialState: TCatalogState = {
  products: [...mockProducts],
  isLoadingProducts: false,

  categories: ["category 1", "category 2"],
  priceRange: {
    min: 0,
    max: 100000,
  },

  searchQuery: "",
  filters: {
    price: {
      min: 0,
      max: 100000,
    },
    category: "all",
  },
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setFilters: (state, { payload }: PayloadAction<TFilter>) => {
      state.filters = payload;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getIsLoadingProducts: (state) => state.isLoadingProducts,
    getSearchQuery: (state) => state.searchQuery,
    getFilters: (state) => state.filters,
    getCategories: (state) => state.categories,
    getPriceRange: (state) => state.priceRange,
  },
});

export default catalogSlice.reducer;
export const { setSearchQuery, setFilters } = catalogSlice.actions;
export const {
  getProducts,
  getIsLoadingProducts,
  getSearchQuery,
  getFilters,
  getCategories,
  getPriceRange,
} = catalogSlice.selectors;
