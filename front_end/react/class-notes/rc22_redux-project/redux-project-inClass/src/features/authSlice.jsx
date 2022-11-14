import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    clearUser: () => {},
  },
});
