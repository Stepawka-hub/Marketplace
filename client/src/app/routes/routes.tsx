import { CatalogPage, NotFoundPage } from "@pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/catalog" replace />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
