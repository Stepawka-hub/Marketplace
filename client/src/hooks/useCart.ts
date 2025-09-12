import { isInArray, productToCartItem } from "@/shared/helpers";
import { TProductData } from "@/shared/types";
import { addToCart, getCartItems } from "@/store/slices/cart";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const cartItemsIds = useMemo(() => cartItems.map((p) => p.id), [cartItems]);

  const addProductToCart = useCallback(
    (product: TProductData) => {
      const cartItem = productToCartItem(product);
      dispatch(addToCart(cartItem));
    },
    [dispatch]
  );

  const isInCart = useCallback(
    (productId: string) => isInArray(cartItemsIds, productId),
    [cartItemsIds]
  );

  return {
    addToCart: addProductToCart,
    isInCart,
  };
};
