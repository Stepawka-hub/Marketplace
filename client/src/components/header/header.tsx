import { LanguageSwitcher } from "@components/language-switcher";
import { ThemeSwitcher } from "@components/theme-switcher";
import { Box, Toolbar } from "@mui/material";
import { FC } from "react";
import { HeaderProps } from "./type";
import { AppBar } from "@ui/app-bar";

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ p: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Box>
        {children}
      </Toolbar>
    </AppBar>
  );
};
