import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    //Reducer can only update value of state in store.
    //Reducer key is predefined. ( object which can store more than one reducer )
    reducer: {
        //reducer is coming from counterSlice since we are exporting reducer as " export default "
        counter: counterSlice,
    },
});

//create Acton() or create Reducer() is used to create Action file or Reducer File Saperatly.
