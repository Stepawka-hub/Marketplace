import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { AppLayout } from "./layout";
import {
  CatalogPage,
  NotFoundPage,
  FavoritesPage,
  RegisterPage,
  LoginPage,
  LotPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  CreateProductPage,
  MyBidsPage,
  AdminPanelPage,
} from "@/pages";
import {
  ProfileData,
  SellerPanel,
  ProtectedRoute,
  BidsHistory,
  MyLotsList,
  SellerRequestsList,
  UsersList,
  Dashboard,
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
            element: <LotPage />,
          },
          {
            path: ROUTES.CREATE_PRODUCT,
            element: <CreateProductPage />,
          },
          {
            path: ROUTES.MY_BIDS,
            element: <MyBidsPage />,
          },
          {
            path: ROUTES.FAVORITES,
            element: <FavoritesPage />,
          },
          {
            path: ROUTES.PROFILE.ROOT,
            element: <ProfilePage />,
            children: [
              {
                index: true,
                element: <ProfileData />,
              },
              {
                path: ROUTES.PROFILE.BIDS_HISTORY,
                element: <BidsHistory />,
              },
              {
                path: ROUTES.PROFILE.SELLER_PANEL,
                element: <SellerPanel />,
              },
              {
                element: (
                  <ProtectedRoute
                    allowedRoles={[USER_ROLES.VENDOR, USER_ROLES.ADMIN]}
                    redirectTo={ROUTES.PROFILE.ROOT}
                  />
                ),
                children: [
                  {
                    path: ROUTES.PROFILE.MY_LOTS,
                    element: <MyLotsList />,
                  },
                ],
              },
            ],
          },
          {
            path: ROUTES.ADMIN_PANEL.ROOT,
            element: (
              <ProtectedRoute
                allowedRoles={[USER_ROLES.MODERATOR, USER_ROLES.ADMIN]}
                redirectTo={ROUTES.CATALOG}
              />
            ),
            children: [
              {
                element: <AdminPanelPage />,
                children: [
                  {
                    index: true,
                    element: (
                      <Navigate to={ROUTES.ADMIN_PANEL.DASHBOARD} replace />
                    ),
                  },
                  {
                    path: ROUTES.ADMIN_PANEL.DASHBOARD,
                    element: <Dashboard />,
                  },
                  {
                    path: ROUTES.ADMIN_PANEL.SELLER_REQUESTS,
                    element: <SellerRequestsList />,
                  },
                  {
                    path: ROUTES.ADMIN_PANEL.USERS,
                    element: <UsersList />,
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
