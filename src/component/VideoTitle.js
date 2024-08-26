
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[80%]  ml-2 md:pt-[15%]   pl-7 md:pl-12 absolute text-white z-12 bg-gradient-to-r from-black '> 
     <h1 className='  text-2xl md:text-6xl font-bold'>{title}</h1>
     <p className='text-lg hidden md:block  md:w-1/4 '>{overview}</p>
     <div className=''>
        <button className='bg-white p-2 text-black md:p-4 md:px-10 md:text-lg rounded-lg hover:bg-opacity-70'>▶️Play</button>
        <button className='bg-gray-400 p-2 md:p-4 mx-2  md:px-10 md:text-lg rounded-lg'>Show</button>
     </div>
    </div>
  )
}

export default VideoTitle
