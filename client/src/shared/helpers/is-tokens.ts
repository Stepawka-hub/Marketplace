import { TAuthResponse } from "@/services/auth/types";

export const isTokens = (data: unknown): data is TAuthResponse =>
  typeof data === "object" && data !== null && "accessToken" in data;
