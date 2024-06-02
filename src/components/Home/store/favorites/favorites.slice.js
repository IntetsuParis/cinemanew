import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const film = action.payload; // Здесь payload содержит весь фильм
      const index = state.findIndex((f) => f.id === film.id); // Проверяем наличие по id фильма
      if (index === -1) {
        state.push(film);
      } else {
        state.splice(index, 1);
      }
    },
    removeFavorite: (state, action) => {
      const { id } = action.payload; // Получаем id фильма из payload
      // Находим индекс элемента для удаления
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        // Если элемент найден, удаляем его
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleToFavorites, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
