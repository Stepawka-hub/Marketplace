import { createSelector } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "@shared/helpers/numbers";
import { getProducts, getSelectedIds } from "../slices/cart";

export const getTotalPrice = createSelector(
  [getProducts, getSelectedIds],
  (products, selectedIds) => calculateTotalPrice(products, selectedIds)
);
