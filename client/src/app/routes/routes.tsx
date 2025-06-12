import { CartPage, CatalogPage, NotFoundPage } from "@pages";
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
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
