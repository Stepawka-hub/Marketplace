import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/config/routes";

import { useSelector } from "@/store";
import { getIsAuth, getIsAuthChecked } from "@/store/slices/profile";

import { Loader } from "@/components/ui";
import { TProtectedRouteProps } from "./types";

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
}) => {
  const isAuth = useSelector(getIsAuth);
  const isAuthChecked = useSelector(getIsAuthChecked);

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

  return <Outlet />;
};
