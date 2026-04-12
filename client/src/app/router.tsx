import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { AppLayout } from "./layout";
import {
  BidsPage,
  CatalogPage,
  NotFoundPage,
  FavoritesPage,
  RegisterPage,
  LoginPage,
  ProductPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  CreateProductPage,
} from "@/pages";
import {
  ProfileData,
  SellerPanel,
  ProtectedRoute,
  BidsHistory,
  MyLotsList,
} from "@/components/containers";
import { USER_ROLES } from "@/shared/constants";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Navigate to={ROUTES.CATALOG} replace />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.CATALOG,
            element: <CatalogPage />,
          },
          {
            path: ROUTES.CATALOG_LOT(":lotId"),
            element: <ProductPage />,
          },
          {
            path: ROUTES.CREATE_PRODUCT,
            element: <CreateProductPage />,
          },
          {
            path: ROUTES.MY_BIDS,
            element: <BidsPage />,
          },
          {
            path: ROUTES.FAVORITES,
            element: <FavoritesPage />,
          },
          {
            path: ROUTES.PROFILE,
            element: <ProfilePage />,
            children: [
              {
                index: true,
                element: <ProfileData />,
              },
              {
                path: ROUTES.PROFILE_BIDS_HISTORY,
                element: <BidsHistory />,
              },
              {
                path: ROUTES.PROFILE_SELLER_PANEL,
                element: <SellerPanel />,
              },
              {
                element: (
                  <ProtectedRoute
                    allowedRoles={[USER_ROLES.VENDOR, USER_ROLES.ADMIN]}
                    redirectTo={ROUTES.PROFILE}
                  />
                ),
                children: [
                  {
                    path: ROUTES.PROFILE_MY_LOTS,
                    element: <MyLotsList />,
                  },
                ],
              },
            ],
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
