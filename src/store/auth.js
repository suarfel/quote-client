import { createSlice } from "@reduxjs/toolkit";
import { eraseCookie, getCookie, setCookie } from "../services/cookies";

const initailToken = getCookie("token");
console.log(initailToken);


const initialAuthState = {
  token: initailToken,
  isLoggedIn: !!initailToken,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
      setCookie("token", action.payload,3);
    },
    logOut(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      eraseCookie("token");
    },
  },
});

export const authActions = authReducer.actions;
export default authReducer.reducer;
