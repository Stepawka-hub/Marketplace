import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "@/services";
import { USER_ROLES } from "@/shared/constants";
import { TProfileState } from "./types";

const initialState: TProfileState = {
  isAuthChecked: false,
  isAuth: false,
  userRole: USER_ROLES.USER,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  selectors: {
    getIsAuthChecked: (state) => state.isAuthChecked,
    getIsAuth: (state) => state.isAuth,
    getUserRole: (state) => state.userRole,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userAPI.endpoints.getMe.matchFulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.isAuth = true;
        state.userRole = action.payload.role;
      })
      .addMatcher(userAPI.endpoints.getMe.matchRejected, (state) => {
        state.isAuth = false;
        state.isAuthChecked = true;
      });
  },
});

export default profileSlice.reducer;
export const { getIsAuth, getIsAuthChecked, getUserRole } =
  profileSlice.selectors;
