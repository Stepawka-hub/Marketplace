import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "@/store";
import {
  getIsAuth,
  getIsAuthChecked,
  getUserRoles,
} from "@/store/slices/profile";
import { useGetMeQuery } from "@/services";
import { isModerator } from "@/shared/helpers";

import {
  FavoritesBadge,
  BidsBadge,
  LanguageSwitcher,
  ThemeSwitcher,
  ProfileBadge,
  AccountMenu,
} from "@/components/containers";
import { AdminBadge, Header } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Paper } from "@mui/material";
import { loaderRootStyle, paperRootStyle } from "./styles";

export const AppLayout: FC = () => {
  const isAuth = useSelector(getIsAuth);
  const isAuthChecked = useSelector(getIsAuthChecked);
  const userRoles = useSelector(getUserRoles);
  useGetMeQuery();

  const isAdminOrModerator = isModerator(userRoles);

  const leftPartElements = (
    <>
      <LanguageSwitcher />
      <ThemeSwitcher />
      {isAdminOrModerator && <AdminBadge />}
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
