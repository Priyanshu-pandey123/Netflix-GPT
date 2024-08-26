import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice({
    name:'config',
    initialState:{
        lan:'en',
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.lan=action.payload;
        }
    }

});


export const {addLanguage}=configSlice.actions;
export default configSlice.reducer;