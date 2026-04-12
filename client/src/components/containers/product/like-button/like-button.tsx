import { FC, useMemo } from "react";
import {
  useAddProductToFavoritesMutation,
  useGetFavoriteIdsQuery,
  useRemoveProductFromFavoritesMutation,
} from "@/services/favorites";
import { LikeButtonUI } from "@/components/elements";
import { isInArray } from "@/shared/helpers";
import { TLikeButtonProps } from "./type";

export const LikeButton: FC<TLikeButtonProps> = ({ lotId }) => {
  const { data: favoriteIds = [] } = useGetFavoriteIdsQuery();

  const [addProductToFavorite, { isLoading: isAdding }] =
    useAddProductToFavoritesMutation();

  const [removeProductFromFavorite, { isLoading: isRemoving }] =
    useRemoveProductFromFavoritesMutation();

  const isInFavorites = useMemo(
    () => isInArray(favoriteIds, lotId),
    [favoriteIds, lotId],
  );

  const addToFavorite = () => {
    addProductToFavorite(lotId);
  };

  const removeFromFavorite = () => {
    removeProductFromFavorite(lotId);
  };

  return (
    <LikeButtonUI
      isActive={isInFavorites}
      disabled={isAdding || isRemoving}
      handleAction={isInFavorites ? removeFromFavorite : addToFavorite}
    />
  );
};
