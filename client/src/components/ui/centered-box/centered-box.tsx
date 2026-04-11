import { FC } from "react";
import { normalizeSx } from "@/shared/helpers";
import { Box } from "@mui/material";
import { boxContainerStyle } from "./styles";
import { TCenteredBoxProps } from "./type";

export const CenteredBox: FC<TCenteredBoxProps> = ({ children, sx = {} }) => (
  <Box sx={[boxContainerStyle, ...normalizeSx(sx)]}>{children}</Box>
);
