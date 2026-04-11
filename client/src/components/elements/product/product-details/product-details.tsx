import { FC } from "react";
import { ProductImages } from "@/components/containers";
import { ProductMeta, ProductPurchase } from "@/components/elements";
import { Box, Divider, Grid, Typography } from "@mui/material";
import {
  dividerStyle,
  gridMainContainerStyle,
  productContentStyle,
  productImagesStyle,
  productNameStyle,
} from "./styles";
import { TProductDetailsUIProps } from "./types";

export const ProductDetailsUI: FC<TProductDetailsUIProps> = ({ product }) => {
  const { id, name, media, description, seller } = product;

  return (
    <Box>
      <Typography variant="h2" sx={productNameStyle}>
        {name}
      </Typography>

      <Grid container sx={gridMainContainerStyle}>
        <Grid sx={productImagesStyle}>
          <ProductImages images={media} />
        </Grid>

        <Grid sx={productContentStyle}>
          <ProductPurchase productId={id} sellerId={seller.id} price={10000} />
          <ProductMeta
            seller={seller}
            attributes={[]}
            description={description}
          />
        </Grid>
      </Grid>

      <Divider sx={dividerStyle} />
    </Box>
  );
};
