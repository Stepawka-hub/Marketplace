import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import { TFavoritesState } from "../types";

const initialState: TFavoritesState = {
  favoriteItems: [],
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }: PayloadAction<TProduct>) => {
      state.favoriteItems = [...state.favoriteItems, payload];
    },
    removeFromFavorites: (state, { payload }: PayloadAction<string>) => {
      state.favoriteItems = state.favoriteItems.filter((i) => i.id !== payload);
    },
  },
  selectors: {
    getFavoriteItems: (state) => state.favoriteItems,
    getFavoriteTotalItems: (state) => state.favoriteItems.length,
    getIsLoading: (state) => state.isLoading,
  },
});

export default favoriteSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const { getFavoriteItems, getIsLoading, getFavoriteTotalItems } =
  favoriteSlice.selectors;
