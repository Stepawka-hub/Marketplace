import { FC } from "react";
import { CountdownTimer, ProductImages } from "@/components/containers";
import { ProductMeta, LotPurchase } from "@/components/elements";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  countdownTimerWrapperStyle,
  dividerStyle,
  gridMainContainerStyle,
  productContentStyle,
  productImagesStyle,
  productNameStyle,
} from "./styles";
import { TLotDetailsUIProps } from "./types";

export const LotDetailsUI: FC<TLotDetailsUIProps> = ({ lot, hasAutoBid = false }) => {
  const { name, media, description, seller } = lot.product;
  const { currentPrice, minBidIncrement, currentWinner, endTime } = lot;

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
          <LotPurchase
            lotId={lot.id}
            sellerId={seller.id}
            currentWinnerId={currentWinner?.id}
            price={currentPrice}
            minBidIncrement={minBidIncrement}
            hasAutoBid={hasAutoBid}
          />
          <ProductMeta seller={seller} description={description} />
          <Paper variant="outlined" sx={countdownTimerWrapperStyle}>
            <AccessTimeIcon />
            <CountdownTimer targetDate={endTime} />
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={dividerStyle} />
    </Box>
  );
};
