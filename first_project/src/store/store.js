import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/userSlice";


// console.log(reducer)
const store = configureStore({
    reducer : {
        users : reducer
    }
});

export default store;