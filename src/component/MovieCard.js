

import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({poster}) => {
  return (
    <div className='w-48 p-2'>
      
        <img
        alt="not found"
        src={IMAGE_CDN+poster}       
         />
      
    </div>
  )
}

export default MovieCard
