import { FC } from "react";
import { TSkeletonListProps } from "./type";
import { Grid } from "@mui/material";
import { skeletonItemContainerStyle, skeletonItemStyle } from "./styles";
import { SkeletonCard } from "@/components/ui";

export const ProductSkeletonList: FC<TSkeletonListProps> = ({
  count = 10,
  minCardWidth = 300,
}) => (
  <Grid container sx={skeletonItemContainerStyle(minCardWidth)}>
    {[...Array(count)].map((_, index) => (
      <Grid key={index} sx={skeletonItemStyle}>
        <SkeletonCard variant="rounded" />
      </Grid>
    ))}
  </Grid>
);
