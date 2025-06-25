import {
  CartPage,
  CatalogPage,
  FavoritesPage,
  ForgotPasswordPage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  RegisterPage,
  ResetPasswordPage,
} from "@pages";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../app-layout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/catalog" replace />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/catalog/:productId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
