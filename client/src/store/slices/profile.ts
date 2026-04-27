import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "@/services";
import { USER_ROLES } from "@/shared/constants";
import { TProfileState } from "./types";

const initialState: TProfileState = {
  isAuthChecked: false,
  isAuth: false,
  userRoles: [USER_ROLES.USER],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  selectors: {
    getIsAuthChecked: (state) => state.isAuthChecked,
    getIsAuth: (state) => state.isAuth,
    getUserRoles: (state) => state.userRoles,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userAPI.endpoints.getMe.matchFulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.isAuth = true;
        state.userRoles = action.payload.roles;
      })
      .addMatcher(userAPI.endpoints.getMe.matchRejected, (state) => {
        state.isAuth = false;
        state.isAuthChecked = true;
      });
  },
});

export default profileSlice.reducer;
export const { getIsAuth, getIsAuthChecked, getUserRoles } =
  profileSlice.selectors;
