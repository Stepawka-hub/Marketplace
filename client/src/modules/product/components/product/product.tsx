import { NotFound } from "@components/not-found";
import {
  ProductDescription,
  ProductImages,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
} from "@modules/product/components";
import { Box, Divider, Grid, Typography } from "@mui/material";
import mockProducts from "@shared/mock/products.json";
import { FC, useState } from "react";
import { ProductProps } from "./type";

export const Product: FC<ProductProps> = ({ id }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavories] = useState(false);

  const product = mockProducts.find((p) => p.id === id);
  if (!product) return <NotFound />;
  const {
    name,
    images,
    price,
    attributes,
    description,
    rating,
    numberReviews,
    seller,
  } = product;

  const addToCart = () => {
    setIsInCart((p) => !p);
  };
  const addToFavorites = () => {
    setIsInFavories((p) => !p);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ mb: 2, fontSize: "2rem", fontWeight: 600 }}
      >
        {name}
      </Typography>

      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
          <ProductImages images={images} />
        </Grid>

        <Grid flexGrow={1}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <ProductPurchase
              isInCart={isInCart}
              isInFavorites={isInFavorites}
              price={price}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
            <ProductMeta
              rating={rating}
              numberReviews={numberReviews}
              seller={seller.name}
              attributes={attributes}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Grid container flexDirection="column">
        <ProductDescription description={description} />
        <Divider sx={{ my: 3 }} />
        <ProductReviews />
      </Grid>
    </Box>
  );
};
