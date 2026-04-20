import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFilter } from "@/shared/types";
import { LOT_STATUSES, MAX_LOT_PRICE, MIN_LOT_PRICE } from "@/shared/constants";
import { TCatalogState } from "./types";

const initialState: TCatalogState = {
  searchQuery: "",
  filters: {
    price: {
      min: MIN_LOT_PRICE,
      max: MAX_LOT_PRICE,
    },
    status: [LOT_STATUSES.ACTIVE, LOT_STATUSES.COMPLETED, LOT_STATUSES.EXPIRED],
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
    getSearchQuery: (state) => state.searchQuery,
    getFilters: (state) => state.filters,
  },
});

export default catalogSlice.reducer;
export const { setSearchQuery, setFilters } = catalogSlice.actions;
export const { getSearchQuery, getFilters } = catalogSlice.selectors;
