import { FC, useMemo } from "react";
import {
  useAddLotToFavoritesMutation,
  useGetFavoriteIdsQuery,
  useRemoveLotFromFavoritesMutation,
} from "@/services/favorites";
import { isInArray } from "@/shared/helpers";
import { LikeButtonUI } from "@/components/elements";
import { TLikeButtonProps } from "./type";

export const LikeButton: FC<TLikeButtonProps> = ({ lotId }) => {
  const { data: favoriteIds = [] } = useGetFavoriteIdsQuery();

  const [addLotToFavorite, { isLoading: isAdding }] =
    useAddLotToFavoritesMutation();

  const [removeLotFromFavorite, { isLoading: isRemoving }] =
    useRemoveLotFromFavoritesMutation();

  const isInFavorites = useMemo(
    () => isInArray(favoriteIds, lotId),
    [favoriteIds, lotId],
  );

  const addToFavorite = () => {
    addLotToFavorite(lotId);
  };

  const removeFromFavorite = () => {
    removeLotFromFavorite(lotId);
  };

  return (
    <LikeButtonUI
      isActive={isInFavorites}
      disabled={isAdding || isRemoving}
      handleAction={isInFavorites ? removeFromFavorite : addToFavorite}
    />
  );
};
