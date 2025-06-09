import { Box, Toolbar } from "@mui/material";
import { AppBar } from "@ui/app-bar";
import { FC } from "react";
import { HeaderProps } from "./type";

export const Header: FC<HeaderProps> = ({ children }) => (
  <AppBar position="static">
    <Toolbar variant="dense" sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: 2 }}>{children}</Box>
    </Toolbar>
  </AppBar>
);
