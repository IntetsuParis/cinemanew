import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import avatar from "../../components/Account/img/avatar.svg";

type AvatarState = {
  image: string | null;
};

const initialState: AvatarState = {
  image: localStorage.getItem("avatar") || avatar,
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
