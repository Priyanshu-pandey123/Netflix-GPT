

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);
   

  
  return (
    <div className=' bg-black'>
    <div className=' md:mt-[-280px] relative z-40'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovie}/> 
       <MovieList title="Popular" movies={movies.topRatedMovies}/> 
       <MovieList title="Top Rated" movies={movies.popularVideos}/> 
       <MovieList title="Comedy" movies={movies.nowPlayingMovie}/> 
    </div>   
       <MovieList title="Dramatic" movies={movies.nowPlayingMovie}/>  
    </div>
  )
}

export default SecondaryContainer
