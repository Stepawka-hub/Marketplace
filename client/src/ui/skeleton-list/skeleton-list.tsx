import { Grid } from "@mui/material";
import { SkeletonCard } from "@ui/skeleton-card";
import { FC } from "react";
import { SkeletonListProps } from "./type";

export const SkeletonList: FC<SkeletonListProps> = ({ count = 10 }) => (
  <Grid container spacing={2}>
    {[...Array(count)].map((_, index) => (
      <Grid
        key={index}
        size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
        sx={{ height: "40vh" }}
      >
        <SkeletonCard variant="rounded" />
      </Grid>
    ))}
  </Grid>
);
