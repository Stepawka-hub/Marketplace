import { baseAPI, AUTH_TAG_TYPE } from "../base";
import { TUserData } from "@/shared/types";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<TUserData, void>({
      query: () => "users/@me",
      providesTags: [AUTH_TAG_TYPE],
    }),
  }),
});

export const { useGetMeQuery } = userAPI;
