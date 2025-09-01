import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from "react-redux";
import catalogReducer from "@/store/slices/catalog";
import cartReducer from "@/store/slices/cart";
import productReducer from "@/store/slices/catalog";
import favoritesReducer from "@/store/slices/favorites";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  product: productReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
