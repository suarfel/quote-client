import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./home";
import authReducer from "./auth";

const store = configureStore({
  reducer: { nav: navReducer, auth: authReducer },
});

export default store;
