import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GPTslice from "./GPTslice";
import configSlice from "./configSlice";


const store=configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:GPTslice,
        config:configSlice,
    }
})

export default store;