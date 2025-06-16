import {
  CartPage,
  CatalogPage,
  FavoritesPage,
  NotFoundPage,
  ProductPage,
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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
