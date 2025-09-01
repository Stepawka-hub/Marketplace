import { calculateTotalPrice } from "@/shared/helpers";
import { createSelector } from "@reduxjs/toolkit";
import { getCartItems, getSelectedIds } from "@/store/slices/cart";

export const getTotalPrice = createSelector(
  [getCartItems, getSelectedIds],
  (items, selectedIds) => calculateTotalPrice(items, selectedIds)
);
