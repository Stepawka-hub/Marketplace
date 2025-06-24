import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";
import { LinkedTextProps } from "./type";
import { NavLink } from "react-router-dom";

export const LinkedText: FC<LinkedTextProps> = ({ to, text, linkText, sx }) => (
  <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "center", ...sx }}>
    <Typography fontSize="1.15rem">{text}</Typography>
    <Link component={NavLink} to={to} fontSize="1.15rem" underline="hover">
      {linkText}
    </Link>
  </Box>
);
