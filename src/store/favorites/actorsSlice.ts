import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Actor } from "../../@types/actors.types";

// Начальное состояние
const initialState: Actor[] = [];

// Создание slice
const actorsSlice = createSlice({
  name: "ActorsSlice",
  initialState,
  reducers: {
    toggleToFavoritesActors: (state, action: PayloadAction<Actor>) => {
      const actor = action.payload;
      const index = state.findIndex((a) => a.id === actor.id);
      if (index === -1) {
        state.push(actor);
      } else {
        state.splice(index, 1);
      }
    },
    removeFavoriteActors: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// Экспорт actions и reducer
export const { toggleToFavoritesActors, removeFavoriteActors } =
  actorsSlice.actions;
export const actorsReducer = actorsSlice.reducer;
