import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:'movies',
    initialState:{
         nowPlayingMovie:null,
         trailersVideos:null,

    },
    reducers:{
       addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovie=action.payload;
       },
       addTrailersVideos:(state,action)=>{
        state.trailersVideos=action.payload;
       }
    }
})

export const {addNowPlayingMovies,addTrailersVideos}=movieSlice.actions;
export default movieSlice.reducer;