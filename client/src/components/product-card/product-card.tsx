import { AddToCartButton } from "@components/add-to-cart-button";
import { LikeButton } from "@components/like-button";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { Card } from "@ui/card";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  boxLikeButtonStyles,
  cardMediaStyles,
  nameTypographyStyles,
  priceTypographyStyles,
} from "./styles";
import { ProductCardProps } from "./type";

export const ProductCard: FC<ProductCardProps> = ({
  product,
  isInCart,
  isInFavorites,
  addToCart,
  toggleFavorite,
}) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { id, name, shortDescription, image, seller, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const handleNavigateToProduct = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <Card
      sx={{ backgroundColor: "custom.primary" }}
      variant="outlined"
      onClick={handleNavigateToProduct}
    >
      <CardMedia sx={cardMediaStyles} image={image} title={name}>
        <Box sx={boxLikeButtonStyles}>
          <LikeButton
            isActive={isInFavorites}
            title={
              isInFavorites
                ? t("product.buttons.remove-from-favorites")
                : t("product.buttons.add-to-favorites")
            }
            callback={handleToggleFavorite}
          />
        </Box>
      </CardMedia>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography sx={priceTypographyStyles} color="textPrimary">
          {`${formattedPrice} ₽`}
        </Typography>

        <Typography variant="h5" sx={nameTypographyStyles}>
          {name}
        </Typography>

        <Typography sx={{ my: 1 }} color="textSecondary">
          {shortDescription}
        </Typography>

        <Typography>{`${t("product.seller.label")}: ${
          seller.name
        }`}</Typography>
      </CardContent>

      <CardActions>
        <AddToCartButton isInCart={isInCart} addToCart={handleAddToCart} />
      </CardActions>
    </Card>
  );
};
