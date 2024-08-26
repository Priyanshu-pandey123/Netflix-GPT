import { createSlice } from "@reduxjs/toolkit";


const GPTslice=createSlice({
    name:'GPTslice',
    initialState:{

        searchToggle:false,
    },
    

    reducers:{
         toggleSearch:(state)=>{
            state.searchToggle=!state.searchToggle;
         }
    }
});

export const {toggleSearch}=GPTslice.actions;
export default GPTslice.reducer;