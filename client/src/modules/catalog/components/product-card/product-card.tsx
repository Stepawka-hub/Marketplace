import { AddToCartButton } from "@components/add-to-cart-button";
import testImg from "@images/testImg.jpg";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { Card } from "@ui/card";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "./type";

export const ProductCard: FC<ProductCardProps> = ({
  product,
  isInCart,
  addToCart,
}) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { id, name, shortDescription, owner, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleNavigateToProduct = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: "custom.primary",
      }}
      variant="outlined"
      onClick={handleNavigateToProduct}
    >
      <CardMedia
        sx={{ height: "25vh", borderRadius: "1.25rem" }}
        image={testImg}
        title={name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ mb: 1, fontSize: "1.25rem", fontWeight: 600 }}
          color="textPrimary"
        >
          {`${formattedPrice} ₽`}
        </Typography>

        <Typography variant="h5" sx={{ fontSize: "1.25rem", fontWeight: 500 }}>
          {name}
        </Typography>

        <Typography sx={{ my: 1 }} color="textSecondary">
          {shortDescription}
        </Typography>

        <Typography>{`${t("product.owner-label")}: ${owner.name}`}</Typography>
      </CardContent>

      <CardActions>
        <AddToCartButton isInCart={isInCart} addToCart={handleAddToCart} />
      </CardActions>
    </Card>
  );
};
