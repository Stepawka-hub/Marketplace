import { FC } from "react";
import { ProductImages } from "@/components/containers";
import { ProductMeta, LotPurchase } from "@/components/elements";
import { Box, Divider, Grid, Typography } from "@mui/material";
import {
  dividerStyle,
  gridMainContainerStyle,
  productContentStyle,
  productImagesStyle,
  productNameStyle,
} from "./styles";
import { TLotDetailsUIProps } from "./types";

export const LotDetailsUI: FC<TLotDetailsUIProps> = ({ lot }) => {
  const { id, name, media, description, seller } = lot.product;
  const { currentPrice = 0 } = lot;

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
          <LotPurchase lotId={id} sellerId={seller.id} price={currentPrice} />
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
