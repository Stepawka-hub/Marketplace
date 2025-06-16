import { toggleFavorite, getFavoriteItems } from "@modules/favorites";
import { isInArray } from "@shared/helpers/array-helper";
import { useDispatch, useSelector } from "@store/types";
import { TProductData } from "@types";
import { useCallback, useMemo } from "react";

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
