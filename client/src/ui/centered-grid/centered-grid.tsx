import { Grid } from "@mui/material";
import { FC } from "react";
import { CenteredGridProps } from "./type";

export const CenteredGrid: FC<CenteredGridProps> = ({
  children,
  size = { xs: 12, md: 8, lg: 5 },
}) => (
  <Grid container sx={{ justifyContent: "center", mt: 10 }}>
    <Grid size={{ ...size }}>{children}</Grid>
  </Grid>
);
