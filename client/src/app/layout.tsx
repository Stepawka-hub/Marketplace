import {
  FavoritesBadge,
  CartBadge,
  LanguageSwitcher,
  ThemeSwitcher,
} from "@/components/containers";
import { Header } from "@/components/ui";
import { Paper } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

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
          </>
        }
      />
      <Outlet />
    </Paper>
  );
};
