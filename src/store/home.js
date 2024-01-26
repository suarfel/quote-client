import {configureStore,createSlice} from '@reduxjs/toolkit';


const intialNavState = {isHamTouched : false, width : window.innerWidth};

const navReducer = createSlice( {
    name : 'nav',
    initialState : intialNavState,
    reducers : {
        changeNav(state){
            state.isHamTouched = !state.isHamTouched;
        },
        setWindow(state){
            state.width = window.innerWidth;
        }

    }
})

export const navActions = navReducer.actions;
export default navReducer.reducer;