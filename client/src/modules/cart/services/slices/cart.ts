import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@shared/helpers/array-helper";
import { TCartProduct } from "@types";
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
    addProduct: (state, { payload }: PayloadAction<TCartProduct>) => {
      state.products = [...state.products, payload];
    },
    removeProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== payload);
      state.selectedIds = state.selectedIds.filter((id) => id !== payload);
    },
    selectAllProducts: (state, { payload }: PayloadAction<boolean>) => {
      if (payload) {
        state.selectedIds = state.products.map((p) => p.id);
      } else {
        state.selectedIds = [];
      }
    },
    clearSelected: (state) => {
      state.products = state.products.filter(
        (p) => !state.selectedIds.includes(p.id)
      );
      state.selectedIds = [];
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
export const {
  selectAllProducts,
  addProduct,
  removeProduct,
  toggleSelectedProduct,
  clearSelected,
} = cartSlice.actions;
export const {
  getProducts,
  getSelectedIds,
  getIsLoadingProducts,
  getCartTotalItems,
  getSelectedItemsCount,
} = cartSlice.selectors;
