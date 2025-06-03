import testImg from "@images/testImg.jpg";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ProductCardProps } from "./type";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { useTranslation } from "react-i18next";

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { i18n, t } = useTranslation();
  const { name, shortDescription, owner, price } = product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        p: 2,
        borderRadius: "1.5rem",
      }}
      variant="outlined"
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

        <Typography sx={{ mt: 1 }} color="textSecondary">
          {shortDescription}
        </Typography>

        <Typography>{`${t("product.owner-label")}: ${owner.name}`}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingBasketIcon />}
        >
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
};
