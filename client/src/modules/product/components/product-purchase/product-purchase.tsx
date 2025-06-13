import { AddToCartButton } from "@components/add-to-cart-button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProductPurchaseProps } from "./type";

export const ProductPurchase: FC<ProductPurchaseProps> = ({
  isInCart,
  isInFavorites,
  price,
  addToCart,
  addToFavorites,
}) => {
  const { i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
          {formattedPrice} ₽
        </Typography>
        <Box>
          <IconButton sx={{ color: red[600] }} onClick={addToFavorites}>
            {isInFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Box>
      <AddToCartButton isInCart={isInCart} addToCart={addToCart} />
    </Paper>
  );
};
