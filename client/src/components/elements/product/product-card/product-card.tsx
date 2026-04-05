import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PlaceBidButton, LikeButton } from "@/components/containers";
import { Card } from "@/components/ui";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { formattedWithSpace } from "@/shared/helpers";
import {
  boxLikeButtonStyle,
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  descTypographyStyle,
  nameTypographyStyle,
  priceTypographyStyle,
} from "./styles";
import { TProductCardProps } from "./type";
import { ROUTES } from "@/config/routes";

export const ProductCard: FC<TProductCardProps> = ({ product }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const { id, name, shortDescription, preview, seller, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const handleNavigateToProduct = () => {
    navigate(ROUTES.CATALOG_PRODUCT(id));
  };

  return (
    <Card variant="outlined" sx={cardStyle} onClick={handleNavigateToProduct}>
      <CardMedia title={name} image={preview} sx={cardMediaStyle}>
        <Box sx={boxLikeButtonStyle}>
          <LikeButton productId={id} />
        </Box>
      </CardMedia>

      <CardContent sx={cardContentStyle}>
        <Typography sx={priceTypographyStyle} color="textPrimary">
          {`${formattedPrice} ₽`}
        </Typography>

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

      <CardActions>
        <PlaceBidButton productId={id} />
      </CardActions>
    </Card>
  );
};
