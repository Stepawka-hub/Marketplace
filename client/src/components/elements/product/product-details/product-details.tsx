import { FC } from "react";
import { ProductImages } from "@/components/containers";
import { ProductMeta, ProductPurchase } from "@/components/elements";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { dividerStyle, productContentStyle, productNameStyle } from "./styles";
import { TProductDetailsUIProps } from "./types";

export const ProductDetailsUI: FC<TProductDetailsUIProps> = ({ product }) => {
  const { id, name, media, description, seller } = product;

  return (
    <Box>
      <Typography variant="h2" sx={productNameStyle}>
        {name}
      </Typography>

      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
          <ProductImages images={media} />
        </Grid>

        <Grid flexGrow={1}>
          <Box sx={productContentStyle}>
            <ProductPurchase
              productId={id}
              sellerId={seller.id}
              price={10000}
            />
            <ProductMeta
              seller={seller}
              attributes={[]}
              description={description}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={dividerStyle} />
    </Box>
  );
};
