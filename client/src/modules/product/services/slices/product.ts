import { createSlice } from "@reduxjs/toolkit";
import { TProductState } from "./types";

const initialState: TProductState = {
  product: null,
  reviews: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  selectors: {
    getProduct: (state) => state.product,
    getReviews: (state) => state.reviews,
  },
});

export default productSlice.reducer;
export const { getProduct, getReviews } = productSlice.selectors;
