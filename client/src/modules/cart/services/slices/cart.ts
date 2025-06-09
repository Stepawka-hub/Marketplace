import { createSlice } from "@reduxjs/toolkit";
import { TCartState } from "./types";

const initialState: TCartState = {
  products: [],
  isLoadingProducts: false,
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
    getIsLoadingProducts: (state) => state.isLoadingProducts,
    getTotalCount: (state) => state.totalCount,
    getTotalPrice: (state) => state.totalPrice,
  },
});

export default cartSlice.reducer;
export const {
  getProducts,
  getIsLoadingProducts,
  getTotalCount,
  getTotalPrice,
} = cartSlice.selectors;
