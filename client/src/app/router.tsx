import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { AppLayout } from "./layout";
import {
  CartPage,
  CatalogPage,
  NotFoundPage,
  FavoritesPage,
  RegisterPage,
  LoginPage,
  ProductPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
} from "@/pages";
import { ProtectedRoute } from "@/components/containers";

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
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.CART,
            element: <CartPage />,
          },
          {
            path: ROUTES.FAVORITES,
            element: <FavoritesPage />,
          },
          {
            path: ROUTES.PROFILE,
            element: <ProfilePage />,
          },
        ],
      },
      {
        element: <ProtectedRoute onlyUnAuth />,
        children: [
          {
            path: ROUTES.REGISTER,
            element: <RegisterPage />,
          },
          {
            path: ROUTES.LOGIN,
            element: <LoginPage />,
          },
          {
            path: ROUTES.FORGOT_PASSWORD,
            element: <ForgotPasswordPage />,
          },
          {
            path: ROUTES.RESET_PASSWORD,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
