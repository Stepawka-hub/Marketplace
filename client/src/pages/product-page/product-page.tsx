import { BackButton } from "@components/back-button";
import { NotFound } from "@components/not-found";
import { useCart } from "@hooks/useCart";
import { useFavorites } from "@hooks/useFavorites";
import { Product } from "@modules/product";
import { Box } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const ProductPage: FC = () => {
  const { productId } = useParams<"productId">();
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  if (!productId) return <NotFound />;

  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <BackButton />
      <Product
        id={productId}
        isInCart={isInCart(productId)}
        addToCart={addToCart}
        isInFavorites={isInFavorites(productId)}
        toggleFavorite={toggleFavorite}
      />
    </Box>
  );
};
