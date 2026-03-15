import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { isTokens } from "@/shared/helpers";
import { BASE_API_URL, HTTP_STATUS } from "./constants";
import { LS_KEYS } from "@/shared/constants";

const mutex = new Mutex();

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Ждём разблокировки mutex
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === HTTP_STATUS.UNAUTHORIZED) {
    // Не заблокирован ли mutex
    if (!mutex.isLocked()) {
      // Блокируем mutex - одновременно может быть отправлен только один запрос на refresh
      const release = await mutex.acquire();

      try {
        const { data } = await baseQuery(
          { url: "/auth/refresh", method: "post", credentials: "include" },
          api,
          extraOptions,
        );

        if (data && isTokens(data)) {
          localStorage.setItem(LS_KEYS.ACCESS_TOKEN, data.accessToken);
          result = await baseQuery(args, api, extraOptions);
        }
      } finally {
        // Снимаем блокировку с mutex
        release();
      }
    } else {
      // Ждём, если mutex заблокирован, а потом повторяем запрос
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }

    // Todo: Обработка ошибок
    // if (result.error && result.error.status !== HTTP_STATUS.UNAUTHORIZED) {
    //  handleError(result.error);
    // };
  }
  return result;
};
