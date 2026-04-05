import { FC, memo } from "react";
import { Grid } from "@mui/material";
import { TProductListUIProps } from "./type";
import {
  NotFound,
  ProductCard,
  ProductSkeletonList,
} from "@/components/elements";

export const ProductListUI: FC<TProductListUIProps> = memo(
  ({ products, isLoading }) => {
    if (isLoading) {
      return <ProductSkeletonList />;
    }

    if (!products.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Grid container columnSpacing={{ xs: 2, md: 2, lg: 2 }} rowSpacing={4}>
        {products.map((p) => (
          <Grid
            key={p.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 2.4,
            }}
          >
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    );
  },
);
