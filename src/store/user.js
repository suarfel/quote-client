import { createSlice } from "@reduxjs/toolkit";

const initailUsername = localStorage.getItem("username");
const initailEmail = localStorage.getItem("userEmail");
const initialUserId = localStorage.getItem("userId");

const userInitialState = {
  userName: initailUsername,
  email: initailEmail,
  userId: initialUserId,
};

const userReducer = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUsername(state, action) {
      state.userName = action.payload;
      localStorage.setItem("username", action.payload);
    },
    removeUsername(state) {
      state.userName = null;
      localStorage.removeItem("userName");
    },
    setEmail(state, action) {
      state.email = action.payload;
      localStorage.setItem("userEmail", action.payload);
    },
    removeEmial(state) {
      state.email = null;
      localStorage.removeItem("userEmail");
    },
    setUserId(state, action) {
      state.email = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    removeUserId(state) {
      state.email = null;
      localStorage.removeItem("userId");
    },
  },
});

export const userActions = userReducer.actions;
export default userReducer.reducer;
