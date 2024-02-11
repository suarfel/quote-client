import { createSlice } from "@reduxjs/toolkit";

const initailToken = localStorage.getItem("token");
// localStorage.clear("token");

const initialAuthState = { token: initailToken, isLoggedIn: !!initailToken };

const authReducer = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
        state.isLoggedIn = !!action.payload;
        localStorage.setItem("token", action.payload);
    },
    logOut(state) {
      state.token = null;
        state.isLoggedIn = false;
        localStorage.removeItem("token");
    },
  },
});


export const authActions = authReducer.actions;
export default  authReducer.reducer;


