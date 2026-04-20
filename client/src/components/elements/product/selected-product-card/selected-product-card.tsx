import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import {
  productInfoStyle,
  productNameStyle,
  productPreviewStyle,
  dividerStyle,
  productDataStyle,
} from "./styles";
import { TSelectedProductCardProps } from "./type";

export const SelectedProductCard: FC<TSelectedProductCardProps> = ({
  name,
  preview,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={productInfoStyle}>
      <Typography variant="subtitle2" color="text.secondary">
        {t("create-lot.selected-product")}
      </Typography>
      <Box sx={productDataStyle}>
        <Avatar src={preview} variant="rounded" sx={productPreviewStyle}>
          {!preview && name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h4" sx={productNameStyle}>
          {name}
        </Typography>
      </Box>
      <Divider sx={dividerStyle} />
    </Box>
  );
};
