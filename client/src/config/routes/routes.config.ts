export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  CATALOG_PRODUCT: (productId: string) => `/catalog/${productId}`,
  CART: "/cart",
  FAVORITES: "/favorites",
  PROFILE: "/profile",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  NOT_FOUND: "*",
} as const;
