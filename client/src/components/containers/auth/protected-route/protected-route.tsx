import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/config/routes";

import { useSelector } from "@/store";
import {
  getIsAuth,
  getIsAuthChecked,
  getUserRole,
} from "@/store/slices/profile";
import { USER_ROLES } from "@/shared/constants";

import { Loader } from "@/components/ui";
import { TProtectedRouteProps } from "./types";

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
  allowedRoles,
  redirectTo = ROUTES.HOME,
}) => {
  const isAuth = useSelector(getIsAuth);
  const isAuthChecked = useSelector(getIsAuthChecked);
  const userRole = useSelector(getUserRole);

  if (!isAuthChecked) {
    return <Loader />;
  }

  // Требуется авторизация, пользователь не авторизован
  if (!onlyUnAuth && !isAuth) {
    return <Navigate replace to={ROUTES.LOGIN} />;
  }

  // Не требуется авторизация, пользователь авторизрован
  if (onlyUnAuth && isAuth) {
    // Возвращаем в каталог
    return <Navigate replace to={ROUTES.CATALOG} />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole || USER_ROLES.USER)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};
