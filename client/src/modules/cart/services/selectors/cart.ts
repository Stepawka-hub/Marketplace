import { createSelector } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "@shared/helpers/numbers";
import { getCartItems, getSelectedIds } from "../slices/cart";

export const getTotalPrice = createSelector(
  [getCartItems, getSelectedIds],
  (items, selectedIds) => calculateTotalPrice(items, selectedIds)
);
