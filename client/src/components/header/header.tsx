import { useTheme } from '@hooks/useTheme';
import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { HeaderProps } from "./type";

export const Header: FC<HeaderProps> = ({ children }) => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <AppBar position="static">
      hrthtr
      <Toolbar variant="dense">{children}</Toolbar>
    </AppBar>
  );
};
