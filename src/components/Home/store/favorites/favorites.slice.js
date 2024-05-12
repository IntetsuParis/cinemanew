import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const film = action.payload; // Здесь payload содержит весь фильм
      const index = state.findIndex((f) => f.id === film.id); // Проверяем наличие по id фильма
      if (index === -1) {
        // Если фильм не найден в списке, добавляем его
        state.push(film);
      } else {
        // Если фильм уже есть в списке, удаляем его
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

export const { actions, reducer } = favoriteSlice;
