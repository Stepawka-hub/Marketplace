import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MyProductList } from "@/components/containers";
import { Box, Typography } from "@mui/material";
import { headerStyle, titleStyle } from "./styles";
import { TSellerPanelUIProps } from "./type";

export const SellerPanelUI: FC<TSellerPanelUIProps> = ({ headerElement }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box component="header" sx={headerStyle}>
        <Typography variant="h2" sx={titleStyle}>
          {t("profile.seller-panel.my-products-title")}
        </Typography>
        {headerElement}
      </Box>
      <MyProductList />
    </Box>
  );
};
