import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@shared/helpers/array-helper";
import { TProduct } from "@types";
import { TCartState } from "./types";

const initialState: TCartState = {
  products: [],
  selectedIds: [],
  isLoadingProducts: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSelectedProduct: (state, { payload }: PayloadAction<string>) => {
      state.selectedIds = toggleArrayItem(state.selectedIds, payload);
    },
    addProduct: (state, { payload }: PayloadAction<TProduct>) => {
      state.products = [...state.products, payload];
    },
    removeProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== payload);
      state.selectedIds = state.selectedIds.filter((id) => id !== payload);
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getCartTotalItems: (state) => state.products.length,
    getIsLoadingProducts: (state) => state.isLoadingProducts,
    getSelectedIds: (state) => state.selectedIds,
    getSelectedItemsCount: (state) => state.selectedIds.length,
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, toggleSelectedProduct } =
  cartSlice.actions;
export const {
  getProducts,
  getSelectedIds,
  getIsLoadingProducts,
  getCartTotalItems,
  getSelectedItemsCount,
} = cartSlice.selectors;
