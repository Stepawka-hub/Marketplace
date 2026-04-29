export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  CATALOG_LOT: (lotId: string) => `/catalog/${lotId}`,
  MY_BIDS: "/my-bids",
  FAVORITES: "/favorites",
  CREATE_PRODUCT: "/create-product",

  PROFILE: {
    ROOT: "/profile",
    SELLER_PANEL: "/profile/seller-panel",
    BIDS_HISTORY: "/profile/bids-history",
    MY_LOTS: "/profile/my-lots",
  },

  ADMIN_PANEL: {
    ROOT: "/admin-panel",
    DASHBOARD: "/admin-panel/dashboard",
    SELLER_REQUESTS: "/admin-panel/seller-requests",
    USERS: "/admin-panel/users",
  },

  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  NOT_FOUND: "*",
} as const;
