import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TProductDescriptionProps } from "./type";
import { descriptionStyle, titleStyle } from "./styles";

export const ProductDescription: FC<TProductDescriptionProps> = ({
  description,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h3" sx={titleStyle}>
        {t("product.details.description")}
      </Typography>
      <Typography sx={descriptionStyle}>
        {description || t("product.details.no-description")}
      </Typography>
    </Box>
  );
};
