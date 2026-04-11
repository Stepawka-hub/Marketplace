import { FC } from "react";
import { ProductImages } from "@/components/containers";
import {
  ProductDescription,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
} from "@/components/elements";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { dividerStyle, productContentStyle, productNameStyle } from "./styles";
import { TProductDetailsUIProps } from "./types";

export const ProductDetailsUI: FC<TProductDetailsUIProps> = ({ product }) => {
  const { id, name, media, price, description, rating, seller } = product;
  const { firstName, lastName } = seller;

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
              price={price}
            />
            <ProductMeta
              rating={rating}
              // Todo: исправить на корректное число ревью
              numberReviews={0}
              seller={`${lastName} ${firstName}`}
              // Todo: исправить на корректные атрибуты
              attributes={[]}
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
