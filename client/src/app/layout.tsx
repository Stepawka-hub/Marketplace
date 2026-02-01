import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "@/store";
import { getIsAuth } from "@/store/slices/profile";
import { useGetMeQuery } from "@/services";

import {
  FavoritesBadge,
  CartBadge,
  LanguageSwitcher,
  ThemeSwitcher,
  ProfileBadge,
} from "@/components/containers";
import { Header } from "@/components/elements";
import { Paper } from "@mui/material";

export const AppLayout: FC = () => {
  const isAuth = useSelector(getIsAuth);
  const { data } = useGetMeQuery();

  const leftPartElements = (
    <>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </>
  );

  const rightPartElements = (
    <>
      {isAuth && (
        <>
          <FavoritesBadge />
          <CartBadge />
        </>
      )}
      <ProfileBadge />
    </>
  );

  return (
    <Paper sx={{ minHeight: "100vh", height: "100%" }}>
      <Header leftPart={leftPartElements} rightPart={rightPartElements} />
      <Outlet />
      {`${data?.firstName} ${data?.lastName}`}
    </Paper>
  );
};
