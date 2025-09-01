import { Box, Toolbar } from "@mui/material";
import { AppBar } from "@ui/app-bar";
import { FC } from "react";
import { HeaderProps } from "./type";

export const Header: FC<HeaderProps> = ({ leftPart, rightPart }) => (
  <AppBar position="static">
    <Toolbar variant="dense" sx={{ p: 2 }}>
      <Box display="flex" gap={2}>
        {leftPart}
      </Box>
      <Box flexGrow={1} />
      <Box display="flex" gap={2}>
        {rightPart}
      </Box>
    </Toolbar>
  </AppBar>
);
