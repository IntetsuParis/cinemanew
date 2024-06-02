import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: localStorage.getItem("avatar") || null,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.image = action.payload;
      localStorage.setItem("avatar", action.payload);
    },
  },
});

export const { setAvatar } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;
