import { Header } from "@components/header";
import { CartBadge } from "@modules/cart";
import { LanguageSwitcher } from "@modules/i18n";
import { ThemeSwitcher } from "@modules/theme";
import { Paper } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = () => {
  return (
    <Paper sx={{ minHeight: "100vh", height: "100%" }}>
      <Header>
        <LanguageSwitcher />
        <ThemeSwitcher />
        <CartBadge />
      </Header>
      <Outlet />
    </Paper>
  );
};
