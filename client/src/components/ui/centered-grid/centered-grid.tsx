import { FC } from "react";
import { Grid } from "@mui/material";
import { CenteredGridProps } from "./type";
import { gridContainerStyle } from "./styles";

export const CenteredGrid: FC<CenteredGridProps> = ({
  children,
  size = { xs: 12, md: 8, lg: 5 },
}) => (
  <Grid container sx={gridContainerStyle}>
    <Grid size={{ ...size }}>{children}</Grid>
  </Grid>
);
