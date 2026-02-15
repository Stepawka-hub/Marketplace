import { FC } from "react";
import { LikeButtonUI } from "@/components/elements";
import { TLikeButtonProps } from "./type";

export const LikeButton: FC<TLikeButtonProps> = ({ productId }) => {
  // const isInFavorites = useCallback(
  //   (productId: string) => isInArray(favoriteItemsIds, productId),
  //   [favoriteItemsIds],
  // );

  const isActive = false;

  const onClick = () => {};

  return <LikeButtonUI isActive={isActive} handleAction={onClick} />;
};
