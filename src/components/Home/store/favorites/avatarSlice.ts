import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AvatarState = {
  image: string | null;
};

const initialState: AvatarState = {
  image: localStorage.getItem("avatar") || null,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setAvatar: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
      localStorage.setItem("avatar", action.payload);
    },
  },
});

export const { setAvatar } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;
