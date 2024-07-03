
import React, { useEffect } from 'react'
import Head from './Head'
import { API_OPTION } from '../utils/constant'
import { json } from 'react-router-dom'

const Browser = () => {


   const getNowPlayingMovie= async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION);
    const json = await data.json();
    console.log(json,"  movie data");
   }
   
 useEffect(()=>{getNowPlayingMovie();},[])

  return (
    <div>
      <Head/>
    </div>
  )
}

export default Browser
