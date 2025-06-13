import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ProductDescription: FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography>{t("product.details.description")}</Typography>
    </Box>
  );
};
