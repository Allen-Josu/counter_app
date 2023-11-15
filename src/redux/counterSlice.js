import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counterApp",
    initialState: {
        value: 0,
    },
    //actions are created inside this reducers key as object.
    //reducer key and reducer are not same.

    reducers: {
        //logics to update
        //function to increment number.
        increment: (state) => {
            state.value += 1;
        },
        //function to decrement number.
        decrement: (state) => {
            state.value -= 1;
        },
        //function to reset number.
        reset: (state) => {
            state.value = 0;
        },
    },
});

//actions is required by components in order to update state
export const { increment, decrement, reset } = counterSlice.actions;

//reducer is required for store to change the state value
export default counterSlice.reducer
