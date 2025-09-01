import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { titleStyle } from "./styles";

export const ProductReviews: FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h3" sx={titleStyle}>
        {t("product.details.reviews")}
      </Typography>
    </Box>
  );
};
