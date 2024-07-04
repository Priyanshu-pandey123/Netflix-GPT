import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:'movies',
    initialState:{
         nowPlayingMovie:null,
         trailersVideos:null,
         popularVideos:null,
         topRatedMovies:null,

    },
    reducers:{
       addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovie=action.payload;
       },
      addPopularVideos:(state,action)=>{
            state.popularVideos=action.payload
       },
       addtopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
       },
       addTrailersVideos:(state,action)=>{
        state.trailersVideos=action.payload;
       },
    }
})

export const {addNowPlayingMovies,addTrailersVideos,addPopularVideos,addtopRatedMovies}=movieSlice.actions;
export default movieSlice.reducer;