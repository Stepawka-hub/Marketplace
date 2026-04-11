import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LikeButton } from "@/components/containers";
import { Card } from "@/components/ui";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import {
  boxLikeButtonStyle,
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  descTypographyStyle,
  nameTypographyStyle,
} from "./styles";
import { TProductCardProps } from "./type";
import { ROUTES } from "@/config/routes";

export const ProductCard: FC<TProductCardProps> = ({
  product,
  isShowLikeButton = false,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { id, name, shortDescription, preview, seller } = product;

  const handleNavigateToProduct = () => {
    navigate(ROUTES.CATALOG_PRODUCT(id));
  };

  return (
    <Card variant="outlined" sx={cardStyle} onClick={handleNavigateToProduct}>
      <CardMedia title={name} image={preview} sx={cardMediaStyle}>
        {isShowLikeButton && (
          <Box sx={boxLikeButtonStyle}>
            <LikeButton productId={id} />
          </Box>
        )}
      </CardMedia>

      <CardContent sx={cardContentStyle}>
        <Typography variant="h5" sx={nameTypographyStyle}>
          {name}
        </Typography>

        <Typography sx={descTypographyStyle} color="textSecondary">
          {shortDescription}
        </Typography>

        <Typography>{`${t(
          "product.seller.label",
        )}: ${`${seller.firstName} ${seller.lastName}`}`}</Typography>
      </CardContent>
    </Card>
  );
};
