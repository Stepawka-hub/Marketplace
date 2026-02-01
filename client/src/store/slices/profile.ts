import { createSlice } from "@reduxjs/toolkit";
import { TProfileState } from "./types";
import { userAPI } from "@/services";

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
  extraReducers: (builder) => {
    builder
      .addMatcher(userAPI.endpoints.getMe.matchFulfilled, (state) => {
        state.isAuthChecked = true;
        state.isAuth = true;
      })
      .addMatcher(userAPI.endpoints.getMe.matchRejected, (state) => {
        state.isAuth = false;
        state.isAuthChecked = true;
      });
  },
});

export default profileSlice.reducer;
export const { getIsAuth, getIsAuthChecked } = profileSlice.selectors;
