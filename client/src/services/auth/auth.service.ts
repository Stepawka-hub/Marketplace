import { baseAPI } from "../base/base.service";
import { LS_KEYS } from "@/shared/constants";
import { TAuthResponse, TLoginPayload, TRegisterPayload } from "./types";
import { AUTH_TAG_TYPE } from "./constants";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TAuthResponse, TLoginPayload>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        localStorage.setItem(LS_KEYS.ACCESS_TOKEN, data.accessToken);

        dispatch(authAPI.util.invalidateTags([AUTH_TAG_TYPE]));
      },
    }),
    register: build.mutation<TAuthResponse, TRegisterPayload>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        localStorage.setItem(LS_KEYS.ACCESS_TOKEN, data.accessToken);

        dispatch(authAPI.util.invalidateTags([AUTH_TAG_TYPE]));
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);

        dispatch(baseAPI.util.resetApiState());
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authAPI;
