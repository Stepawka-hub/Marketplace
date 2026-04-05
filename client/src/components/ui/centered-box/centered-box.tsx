import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { boxContainerStyle } from "./styles";

export const CenteredBox: FC<PropsWithChildren> = ({ children }) => (
  <Box sx={boxContainerStyle}>
    {children}
  </Box>
);
