
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%]  pl-12 absolute text-white z-12 bg-gradient-to-r from-black '> 
     <h1 className='text-6xl font-bold'>{title}</h1>
     <p className='text-lg  w-1/4 '>{overview}</p>
     <div className=''>
        <button className='bg-white text-black p-4 px-10 text-lg rounded-lg hover:bg-opacity-70'>▶️Play</button>
        <button className='bg-gray-400 p-4 mx-2 px-10 text-lg rounded-lg'>Show</button>
     </div>
    </div>
  )
}

export default VideoTitle
