import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "@/store";
import { getIsAuth, getIsAuthChecked } from "@/store/slices/profile";
import { useGetMeQuery } from "@/services";

import {
  FavoritesBadge,
  BidsBadge,
  LanguageSwitcher,
  ThemeSwitcher,
  ProfileBadge,
  AccountMenu,
} from "@/components/containers";
import { Header } from "@/components/elements";
import { Paper } from "@mui/material";
import { Loader } from "@/components/ui";
import { loaderRootStyle, paperRootStyle } from "./styles";

export const AppLayout: FC = () => {
  const isAuth = useSelector(getIsAuth);
  const isAuthChecked = useSelector(getIsAuthChecked);
  useGetMeQuery();

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
          <BidsBadge />
        </>
      )}
      {isAuth ? <AccountMenu /> : <ProfileBadge />}
    </>
  );

  return (
    <Paper sx={paperRootStyle}>
      {isAuthChecked ? (
        <>
          <Header leftPart={leftPartElements} rightPart={rightPartElements} />
          <Outlet />
        </>
      ) : (
        <Loader sx={loaderRootStyle} />
      )}
    </Paper>
  );
};
