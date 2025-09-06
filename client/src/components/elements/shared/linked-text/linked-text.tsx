import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LinkedTextProps } from "./type";
import { boxStyle, textStyle } from "./styles";
import { Box, Link, Typography } from "@mui/material";
import { normalizeSx } from "@/shared/helpers";

export const LinkedText: FC<LinkedTextProps> = ({
  to,
  text,
  linkText,
  sx = {},
}) => (
  <Box sx={[boxStyle, ...normalizeSx(sx)]}>
    <Typography sx={textStyle}>{text}</Typography>
    <Link component={NavLink} to={to} underline="hover" sx={textStyle}>
      {linkText}
    </Link>
  </Box>
);
