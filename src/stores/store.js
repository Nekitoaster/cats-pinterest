import { configureStore } from "@reduxjs/toolkit";
import { catsApi } from "./cats/catsApi";
import { favoritesSlice } from "./cats/favourites.slice";

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
    favorites: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
});
