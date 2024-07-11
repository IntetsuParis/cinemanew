import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = true;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isAuth = false;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
