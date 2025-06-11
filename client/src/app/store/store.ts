import { cartReducer } from "@modules/cart";
import { catalogReducer } from "@modules/catalog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
