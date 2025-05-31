import { LanguageSwitcher } from '@components/language-switcher';
import { ThemeSwitcher } from '@components/theme-switcher';
import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { HeaderProps } from "./type";

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <LanguageSwitcher />
        <ThemeSwitcher />
        {children}
      </Toolbar>
    </AppBar>
  );
};
