import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./home";
import userReducer from "./user";
import authReducer from "./auth";

const store = configureStore({
  reducer: { nav: navReducer, auth: authReducer ,user : userReducer},
});

export default store;
