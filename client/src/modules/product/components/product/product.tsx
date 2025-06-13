import {
  ProductDescription,
  ProductImages,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
  ProductSpecs,
} from "@modules/product/components";
import { Box, Grid, Typography } from "@mui/material";
import { TAttribute } from "@types";
import { FC, useState } from "react";
import { ProductProps } from "./type";

export const Product: FC<ProductProps> = ({ id }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavories] = useState(false);

  const attributes: TAttribute[] = [
    { name: "Тип", value: "Шампунь" },
    { name: "Объем", value: "500 мл" },
    { name: "Атрибут 1", value: "Значение 1" },
    { name: "Атрибут 2", value: "Значение 2" },
    { name: "Атрибут 3", value: "Значение 3" },
    { name: "Атрибут 4", value: "Значение 4" },
  ];

  const addToCart = () => {
    setIsInCart((p) => !p);
  };
  const addToFavorites = () => {
    setIsInFavories((p) => !p);
  };

  return (
    <Box>
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {`Product: ${id}`}
      </Typography>
      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={6}>
          <ProductImages />
        </Grid>
        <Grid size={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <ProductPurchase
              isInCart={isInCart}
              isInFavorites={isInFavorites}
              price={3000}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
            <ProductMeta
              rating={4.4}
              numberReviews={5346}
              seller="Stepawka"
              attributes={attributes}
            />
          </Box>
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
