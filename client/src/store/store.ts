import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@modules/cart";
import { catalogReducer } from "@modules/catalog";
import { productReducer } from "@modules/product";
import { favoritesReducer } from "@modules/favorites";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  product: productReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
