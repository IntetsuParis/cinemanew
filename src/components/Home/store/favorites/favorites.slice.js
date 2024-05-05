import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, { payload: film }) => {
      const isExists = state.some((f) => f.id != film.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === film.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(film);
    },
  },
});

export const { actions, reducer } = favoriteSlice;
