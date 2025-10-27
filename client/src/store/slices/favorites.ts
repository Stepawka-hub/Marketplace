import { TProductOld } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFavoritesState } from "./types";

const initialState: TFavoritesState = {
  favoriteItems: [],
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<TProductOld>) => {
      const product = payload;
      const existingProductIndex = state.favoriteItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.favoriteItems.splice(existingProductIndex, 1);
      } else {
        state.favoriteItems.push(product);
      }
    },
  },
  selectors: {
    getFavoriteItems: (state) => state.favoriteItems,
    getFavoriteTotalItems: (state) => state.favoriteItems.length,
    getIsLoading: (state) => state.isLoading,
  },
});

export default favoriteSlice.reducer;
export const { toggleFavorite } = favoriteSlice.actions;
export const { getFavoriteItems, getIsLoading, getFavoriteTotalItems } =
  favoriteSlice.selectors;
