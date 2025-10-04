import { FC } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { dividerStyle, productContentStyle, productNameStyle } from "./styles";
import { TProductDetailsUIProps } from "./types";
import { ProductImages } from "@/components/containers";
import {
  ProductDescription,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
} from "@/components/elements";

export const ProductDetailsUI: FC<TProductDetailsUIProps> = ({
  product,
  isInCart,
  isInFavorites,
  addToCart,
  toggleFavorite,
}) => {
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

  return (
    <Box>
      <Typography variant="h2" sx={productNameStyle}>
        {name}
      </Typography>

      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
          <ProductImages images={images} />
        </Grid>

        <Grid flexGrow={1}>
          <Box sx={productContentStyle}>
            <ProductPurchase
              isInCart={isInCart}
              isInFavorites={isInFavorites}
              price={price}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
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

      <Divider sx={dividerStyle} />

      <Grid container flexDirection="column">
        <ProductDescription description={description} />
        <Divider sx={dividerStyle} />
        <ProductReviews />
      </Grid>
    </Box>
  );
};
