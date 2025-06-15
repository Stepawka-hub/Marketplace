import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ProductReviews: FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ mb: 1, fontSize: "1.75rem", fontWeight: 600 }}
      >
        {t("product.details.reviews")}
      </Typography>
    </Box>
  );
};
