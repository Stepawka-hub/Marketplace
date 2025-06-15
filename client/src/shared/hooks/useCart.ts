import { addProduct, getCartItems } from "@modules/cart";
import { isInArray } from "@shared/helpers/array-helper";
import { productToCartItem } from "@shared/helpers/product-helper";
import { TProductData } from "@types";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const cartItemsIds = useMemo(() => cartItems.map((p) => p.id), [cartItems]);

  const addToCart = (product: TProductData) => {
    const cartItem = productToCartItem(product);
    dispatch(addProduct(cartItem));
  };

  const isInCart = (productId: string) => isInArray(cartItemsIds, productId);

  return {
    addToCart,
    isInCart,
  };
};
