import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProductDescriptionProps } from "./type";

export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ mb: 1, fontSize: "1.75rem", fontWeight: 600 }}
      >
        {t("product.details.description")}
      </Typography>
      <Typography sx={{ fontSize: "1.15rem" }}>
        {description || t("product.details.no-description")}
      </Typography>
    </Box>
  );
};
