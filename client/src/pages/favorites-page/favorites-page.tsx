import { BackButton } from "@components/back-button";
import { ProductList } from "@components/product-list";
import { useCart } from "@hooks/useCart";
import { useFavorites } from "@hooks/useFavorites";
import { getFavoriteItems, getIsLoading } from "@modules/favorites";
import { Box, Typography } from "@mui/material";
import { useSelector } from "@store/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const FavoritesPage: FC = () => {
  const { t } = useTranslation();
  const products = useSelector(getFavoriteItems);
  const isLoading = useSelector(getIsLoading);
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <BackButton />
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {t("favorites.title")}
      </Typography>
      <ProductList
        products={products}
        isLoading={isLoading}
        isInCart={isInCart}
        isInFavorites={isInFavorites}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
      />
    </Box>
  );
};
