import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  checkoutBtnStyle,
  containerStyle,
  priceBoxStyle,
  textStyle,
  titleStyle,
} from "./styles";
import { TCartSummaryProps } from "./type";

export const CartSummary: FC<TCartSummaryProps> = ({ totalPrice, labels }) => {
  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle}>{labels.information}</Typography>

      <Box sx={priceBoxStyle}>
        <Typography sx={textStyle}>{labels.products}</Typography>
        <Typography sx={textStyle}>{`${totalPrice} ₽`}</Typography>
      </Box>
      <Button variant="contained" sx={checkoutBtnStyle}>
        {labels.checkout}
      </Button>
    </Box>
  );
};
