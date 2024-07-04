

import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,title}) => {

    if(!movies) return
return (
 <div className='p-4'>

        <h1 className='text-3xl font-bold text-white'>{title}</h1>

        <div className='flex overflow-x-scroll'>          
            <div className='flex'>
            {
            movies.map((movie)=> (
            <MovieCard key={movie.id}  poster={movie.poster_path}/>)
             )}
            </div>

            
        </div>
    </div>
  )
}

export default MovieList
