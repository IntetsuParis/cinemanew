import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRating: JSON.parse(localStorage.getItem("ratings")) || {},
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating: (state, action) => {
      const { filmId, rating } = action.payload;
      state.userRating[filmId] = rating;
      localStorage.setItem("ratings", JSON.stringify(state.userRating));
    },
  },
});

export const { setRating } = ratingSlice.actions;
export const ratingReducer = ratingSlice.reducer;
