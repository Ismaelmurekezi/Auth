import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
