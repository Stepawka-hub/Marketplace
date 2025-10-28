import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";
import {
  FavoritesBadge,
  CartBadge,
  LanguageSwitcher,
  ThemeSwitcher,
  ProfileBadge,
} from "@/components/containers";
import { Header } from "@/components/elements";

export const AppLayout: FC = () => {
  return (
    <Paper sx={{ minHeight: "100vh", height: "100%" }}>
      <Header
        leftPart={
          <>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </>
        }
        rightPart={
          <>
            <FavoritesBadge />
            <CartBadge />
            <ProfileBadge />
          </>
        }
      />
      <Outlet />
    </Paper>
  );
};
