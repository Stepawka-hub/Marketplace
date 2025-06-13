import {
  ProductDescription,
  ProductImages,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
  ProductSpecs,
} from "@modules/product/components";
import { getProduct } from "@modules/product/services/slices/product";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "@store/types";
import { TAttribute } from "@types";
import { FC } from "react";
import { ProductProps } from "./type";

export const Product: FC<ProductProps> = ({ id }) => {
  const product = useSelector(getProduct);
  console.log(product);

  const attributes: TAttribute[] = [
    { name: "Тип", value: "Шампунь" },
    { name: "Объем", value: "500 мл" },
    { name: "Атрибут 1", value: "Значение 1" },
    { name: "Атрибут 2", value: "Значение 2" },
    { name: "Атрибут 3", value: "Значение 3" },
    { name: "Атрибут 4", value: "Значение 4" },
  ];

  return (
    <Box>
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {`Product: ${id}`}
      </Typography>
      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={4}>
          <ProductImages />
        </Grid>
        <Grid size={4}>
          <ProductMeta
            rating={4.4}
            numberReviews={5346}
            seller="Stepawka"
            attributes={attributes}
          />
        </Grid>
        <Grid size={4}>
          <ProductPurchase />
        </Grid>
      </Grid>
      <Grid container flexDirection="column">
        <ProductDescription />
        <ProductSpecs />
        <ProductReviews />
      </Grid>
    </Box>
  );
};
