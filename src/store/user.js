import { createSlice } from "@reduxjs/toolkit";

const  initailUsername  = localStorage.getItem("username");
const initailEmail = localStorage.getItem("userEmail");

const userInitialState = {
    userName : initailUsername ,
    email :initailEmail,
}

const userReducer = createSlice({
    name : "user",
    initialState : userInitialState,
    reducers : {
        setUsername(state,action){
            state.userName = action.payload;
            localStorage.setItem("username",action.payload);

        },
        setEmail(state,action){
            state.email = action.payload;
            localStorage.setItem("userEmail",action.payload);

        },
        removeEmial(state){
            state.email = null;
            localStorage.removeItem("userEmail");
        },
        removeUsername(state){
            state.userName = null;
            localStorage.removeItem("userName");

        }

    }
});



export const userActions = userReducer.actions;
export default userReducer.reducer;