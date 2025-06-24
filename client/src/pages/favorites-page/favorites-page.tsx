import { BackButton } from "@components/back-button";
import { useCart } from "@hooks/useCart";
import { useFavorites } from "@hooks/useFavorites";
import { FavoritesList } from "@modules/favorites";
import { Typography } from "@mui/material";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const FavoritesPage: FC = () => {
  const { t } = useTranslation();
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  return (
    <PageContainer>
      <BackButton />
      <Typography
        variant="h2"
        sx={{ mb: 3, fontSize: "2rem", fontWeight: 600 }}
      >
        {t("favorites.title")}
      </Typography>
      <FavoritesList
        isInCart={isInCart}
        isInFavorites={isInFavorites}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
      />
    </PageContainer>
  );
};
