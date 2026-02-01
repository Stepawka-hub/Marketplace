import { baseAPI } from "../base/base.service";
import { TUserData } from "@/shared/types";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<TUserData, void>({
      query: () => ({
        url: "users/@me",
        providesTags: ["Auth"],
      }),
    }),
  }),
});

export const { useGetMeQuery } = userAPI;
