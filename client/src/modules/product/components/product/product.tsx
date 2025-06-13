import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "@store/types";
import { getProduct } from "@modules/product/services/slices/product";
import {
  ProductDescription,
  ProductImages,
  ProductPurchase,
  ProductSpecs,
  ProductReviews,
  ProductMeta,
} from "@modules/product/components";
import { ProductProps } from "./type";

export const Product: FC<ProductProps> = ({ id }) => {
  const product = useSelector(getProduct);
  console.log(product);

  return (
    <Grid>
      <Grid>
        <Typography variant="h2" fontSize="2rem" fontWeight="600">
          {`Product: ${id}`}
        </Typography>
      </Grid>
      <Grid>
        <ProductImages />
        <ProductMeta />
        <ProductPurchase />
      </Grid>
      <Grid>
        <ProductDescription />
        <ProductSpecs />
        <ProductReviews />
      </Grid>
    </Grid>
  );
};
