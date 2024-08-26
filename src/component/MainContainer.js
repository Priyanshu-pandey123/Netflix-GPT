

import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  
     const movie=useSelector((store)=>store.movies?.nowPlayingMovie);
     if(!movie) return;
     const {original_title,overview,id}=movie[2];
     console.log("second");

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
