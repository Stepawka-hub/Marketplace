import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@shared/helpers/array-helper";
import { TCartProduct } from "@types";
import { TCartState } from "./cart/types";

const initialState: TCartState = {
  cartItems: [],
  selectedIds: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSelectedProduct: (state, { payload }: PayloadAction<string>) => {
      state.selectedIds = toggleArrayItem(state.selectedIds, payload);
    },
    addToCart: (state, { payload }: PayloadAction<TCartProduct>) => {
      state.cartItems = [...state.cartItems, payload];
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== payload);
      state.selectedIds = state.selectedIds.filter((id) => id !== payload);
    },
    selectAllCartItems: (state, { payload }: PayloadAction<boolean>) => {
      if (payload) {
        state.selectedIds = state.cartItems.map((i) => i.id);
      } else {
        state.selectedIds = [];
      }
    },
    clearSelected: (state) => {
      state.cartItems = state.cartItems.filter(
        (i) => !state.selectedIds.includes(i.id)
      );
      state.selectedIds = [];
    },
  },
  selectors: {
    getCartItems: (state) => state.cartItems,
    getCartTotalItems: (state) => state.cartItems.length,
    getIsLoading: (state) => state.isLoading,
    getSelectedIds: (state) => state.selectedIds,
    getSelectedItemsCount: (state) => state.selectedIds.length,
  },
});

export default cartSlice.reducer;
export const {
  selectAllCartItems,
  addToCart,
  removeFromCart,
  toggleSelectedProduct,
  clearSelected,
} = cartSlice.actions;
export const {
  getCartItems,
  getSelectedIds,
  getIsLoading,
  getCartTotalItems,
  getSelectedItemsCount,
} = cartSlice.selectors;
