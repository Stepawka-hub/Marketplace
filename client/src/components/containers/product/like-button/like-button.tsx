import { FC, useMemo } from "react";
import {
  useAddProductToFavoritesMutation,
  useGetFavoritesProductsQuery,
  useRemoveProductFromFavoritesMutation,
} from "@/services/favorites";
import { LikeButtonUI } from "@/components/elements";
import { TLikeButtonProps } from "./type";

export const LikeButton: FC<TLikeButtonProps> = ({ productId }) => {
  const { data: favorites = [] } = useGetFavoritesProductsQuery(5);

  const [addProductToFavorite, { isLoading: isAdding }] =
    useAddProductToFavoritesMutation();

  const [removeProductFromFavorite, { isLoading: isRemoving }] =
    useRemoveProductFromFavoritesMutation();

  const isInFavorites = useMemo(
    () => favorites.some((f) => f.id === productId),
    [favorites, productId],
  );

  const addToFavorite = () => {
    addProductToFavorite(productId);
  };

  const removeFromFavorite = () => {
    removeProductFromFavorite(productId);
  };

  return (
    <LikeButtonUI
      isActive={isInFavorites}
      disabled={isAdding || isRemoving}
      handleAction={isInFavorites ? removeFromFavorite : addToFavorite}
    />
  );
};
