import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { AppLayout } from "./layout";
import { CartPage, CatalogPage, NotFoundPage, FavoritesPage } from "@/pages";
import { ProductPage } from "@/pages/product-page";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Navigate to={ROUTES.CATALOG} replace />,
      },
      {
        path: ROUTES.CATALOG,
        element: <CatalogPage />,
      },
      {
        path: ROUTES.CATALOG_PRODUCT(":productId"),
        element: <ProductPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
      // {
      //   path: ROUTES.REGISTER,
      //   element: <RegisterPage />,
      // },
      // {
      //   path: ROUTES.LOGIN,
      //   element: <LoginPage />,
      // },
      // {
      //   path: ROUTES.FORGOT_PASSWORD,
      //   element: <ForgotPasswordPage />,
      // },
      // {
      //   path: ROUTES.RESET_PASSWORD,
      //   element: <ResetPasswordPage />,
      // },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
