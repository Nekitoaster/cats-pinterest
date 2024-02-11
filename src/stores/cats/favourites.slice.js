import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: cat }) => {
      const isExist = state.some((r) => r.id === cat.id);

      if (isExist) {
        const index = state.findIndex((item) => item.id === cat.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(cat);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
