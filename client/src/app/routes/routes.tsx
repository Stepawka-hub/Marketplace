import { createBrowserRouter } from "react-router-dom";
import { CatalogPage } from '@pages';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogPage />,
  },
]);
