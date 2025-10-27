import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from "react-redux";
import catalogReducer from "@/store/slices/catalog";
import cartReducer from "@/store/slices/cart";
import productReducer from "@/store/slices/product";
import favoritesReducer from "@/store/slices/favorites";
import profileReducer from "@/store/slices/profile";
import { authAPI, productAPI } from "@/services";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  product: productReducer,
  favorites: favoritesReducer,
  profile: profileReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [productAPI.reducerPath]: productAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, productAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
