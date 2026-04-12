import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from "react-redux";
import catalogReducer from "@/store/slices/catalog";
import profileReducer from "@/store/slices/profile";
import lotReducer from "@/store/slices/lot";
import { baseAPI } from "@/services/base/base.service";

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  lot: lotReducer,
  profile: profileReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
