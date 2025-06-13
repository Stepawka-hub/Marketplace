import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ProductReviews: FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography>{t("product.details.reviews")}</Typography>
    </Box>
  );
};
