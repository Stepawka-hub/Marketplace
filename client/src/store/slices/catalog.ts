import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFilter } from "@/shared/types";
import { TCatalogState } from "./types";
import { LOT_STATUSES } from "@/shared/constants";

const initialState: TCatalogState = {
  searchQuery: "",
  filters: {
    price: {
      min: 0,
      max: 10_000_000,
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
