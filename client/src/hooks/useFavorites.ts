import { useCallback, useMemo } from "react";
import { isInArray } from "@/shared/helpers";
import { TProductData } from "@/shared/types";
import { useDispatch, useSelector } from "@/store";
import { getFavoriteItems, toggleFavorite } from "@/store/slices/favorites";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(getFavoriteItems);
  const favoriteItemsIds = useMemo(
    () => favoriteItems.map((p) => p.id),
    [favoriteItems]
  );

  const toggleProductInFavorites = useCallback(
    (product: TProductData) => {
      const { id, name, price, category, seller } = product;
      const image = "image" in product ? product.image : product.images[0];

      dispatch(
        toggleFavorite({
          id,
          name,
          price,
          image,
          category,
          seller,
        })
      );
    },
    [dispatch]
  );

  const isInFavorites = useCallback(
    (productId: string) => isInArray(favoriteItemsIds, productId),
    [favoriteItemsIds]
  );

  return {
    toggleFavorite: toggleProductInFavorites,
    isInFavorites,
  };
};
