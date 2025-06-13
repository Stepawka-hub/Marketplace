import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@modules/cart";
import { catalogReducer } from "@modules/catalog";
import { productReducer } from '@modules/product';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  product: productReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
