import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
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
import { formattedWithSpace } from "@/shared/helpers";
import { Card } from "@/components/ui";
import { AddToCartButton, LikeButton } from "@/components/containers";

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
    <Card variant="outlined" sx={cardStyle} onClick={handleNavigateToProduct}>
      <CardMedia title={name} image={image} sx={cardMediaStyle}>
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
