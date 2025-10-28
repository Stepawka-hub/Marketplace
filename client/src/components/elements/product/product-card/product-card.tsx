import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AddToCartButton } from "@/components/containers";
import { LikeButton } from "@/components/elements";
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
import { ProductCardProps } from "./type";
import { ROUTES } from "@/config/routes";

export const ProductCard: FC<ProductCardProps> = ({
  product,
  isInCart,
  isInFavorites,
  addToCart,
  toggleFavorite,
}) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { id, name, shortDescription, media, seller, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const preview = media.find((m) => m.isPreview);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const handleNavigateToProduct = () => {
    navigate(ROUTES.CATALOG_PRODUCT(id));
  };

  return (
    <Card variant="outlined" sx={cardStyle} onClick={handleNavigateToProduct}>
      <CardMedia title={name} image={preview?.url} sx={cardMediaStyle}>
        <Box sx={boxLikeButtonStyle}>
          <LikeButton
            isActive={isInFavorites}
            title={
              isInFavorites
                ? t("product.buttons.remove-from-favorites")
                : t("product.buttons.add-to-favorites")
            }
            handleClick={handleToggleFavorite}
          />
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
          "product.seller.label"
        )}: ${`${seller.firstName} ${seller.lastName}`}`}</Typography>
      </CardContent>

      <CardActions>
        <AddToCartButton isInCart={isInCart} addToCart={handleAddToCart} />
      </CardActions>
    </Card>
  );
};
