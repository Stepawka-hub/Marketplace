import { baseAPI } from "../base";
import { TCreatePaymentRequest, TCreatePaymentResponse } from "./types";

export const paymentAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation<
      TCreatePaymentResponse,
      TCreatePaymentRequest
    >({
      query: (body) => ({
        url: "/payment",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentAPI;
