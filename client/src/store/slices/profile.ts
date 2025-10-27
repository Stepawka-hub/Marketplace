import { createSlice } from "@reduxjs/toolkit";
import { TProfileState } from "./types";

const initialState: TProfileState = {
  isAuthChecked: false,
  isAuth: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  selectors: {
    getIsAuthChecked: (state) => state.isAuthChecked,
    getIsAuth: (state) => state.isAuth,
  },
});

export default profileSlice.reducer;
export const { getIsAuth } = profileSlice.selectors;
