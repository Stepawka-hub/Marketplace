import { FC } from "react";
import { TSkeletonListProps } from "./type";
import { Grid } from "@mui/material";
import { skeletonItemStyle } from "./styles";
import { SkeletonCard } from "@/components/ui";

export const ProductSkeletonList: FC<TSkeletonListProps> = ({ count = 10 }) => (
  <Grid container spacing={2}>
    {[...Array(count)].map((_, index) => (
      <Grid
        key={index}
        size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
        sx={skeletonItemStyle}
      >
        <SkeletonCard variant="rounded" />
      </Grid>
    ))}
  </Grid>
);
