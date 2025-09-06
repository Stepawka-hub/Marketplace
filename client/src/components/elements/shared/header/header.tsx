import { FC } from "react";
import { Box, Toolbar } from "@mui/material";
import { AppBar } from "@/components/ui";
import { HeaderProps } from "./type";
import { headerPartStyle, toolbarStyle } from "./styles";

export const Header: FC<HeaderProps> = ({ leftPart, rightPart }) => (
  <AppBar position="static">
    <Toolbar variant="dense" sx={toolbarStyle}>
      <Box sx={headerPartStyle}>{leftPart}</Box>
      <Box flexGrow={1} />
      <Box sx={headerPartStyle}>{rightPart}</Box>
    </Toolbar>
  </AppBar>
);
