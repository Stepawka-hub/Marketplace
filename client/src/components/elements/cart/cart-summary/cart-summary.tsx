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
import { formattedWithSpace } from "@/shared/helpers";
import { useTranslation } from "react-i18next";

export const CartSummary: FC<TCartSummaryProps> = ({
  totalCount,
  totalPrice,
  onCheckout,
}) => {
  const { t, i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(totalPrice, i18n.language);

  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle}>{t("cart.summary.information")}</Typography>

      <Box sx={priceBoxStyle}>
        <Typography sx={textStyle}>
          {t("cart.summary.products", { count: totalCount })}
        </Typography>
        <Typography sx={textStyle}>{`${formattedPrice} ₽`}</Typography>
      </Box>
      <Button variant="contained" sx={checkoutBtnStyle} onClick={onCheckout}>
        {t("cart.summary.checkout")}
      </Button>
    </Box>
  );
};
