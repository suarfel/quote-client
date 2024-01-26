import { configureStore } from "@reduxjs/toolkit"
import navReducer from './home';

const store = configureStore({
    reducer : {nav : navReducer}
})

export default store;  