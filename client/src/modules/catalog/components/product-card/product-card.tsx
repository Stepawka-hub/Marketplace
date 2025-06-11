import testImg from "@images/testImg.jpg";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ProductCardProps } from "./type";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { useTranslation } from "react-i18next";
import { Card } from "@ui/card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

export const ProductCard: FC<ProductCardProps> = ({
  product,
  isInCart,
  addToCart,
}) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { id, name, shortDescription, owner, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleNavigateToProduct = () => {
    navigate(`/catalog/${id}`);
  };

  const handleNavigateToCart = () => {
    navigate("/cart");
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
        {isInCart ? (
          <Button
            variant="contained"
            fullWidth
            startIcon={<CheckCircleIcon />}
            onClick={handleNavigateToCart}
          >
            {t("product.in-cart")}
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingBasketIcon />}
            onClick={handleAddToCart}
          >
            {t("product.add-to-cart")}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
