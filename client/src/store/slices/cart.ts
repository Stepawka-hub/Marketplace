import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleArrayItem } from "@/shared/helpers";
import { TCartState } from "./types";

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
    selectAllCartItems: (state, { payload }: PayloadAction<boolean>) => {
      if (payload) {
        state.selectedIds = state.cartItems.map((i) => i.id);
      } else {
        state.selectedIds = [];
      }
    },
    // Todo: переписать удаление из корзины
    clearSelected: (state) => {
      state.cartItems = state.cartItems.filter(
        (i) => !state.selectedIds.includes(i.id),
      );
      state.selectedIds = [];
    },
  },
  selectors: {
    getCartItems: (state) => state.cartItems,
    getCartTotalItems: (state) => state.cartItems.length,
    getSelectedIds: (state) => state.selectedIds,
    getSelectedItemsCount: (state) => state.selectedIds.length,
  },
});

export default cartSlice.reducer;
export const { selectAllCartItems, toggleSelectedProduct, clearSelected } =
  cartSlice.actions;
export const {
  getCartItems,
  getSelectedIds,
  getCartTotalItems,
  getSelectedItemsCount,
} = cartSlice.selectors;
