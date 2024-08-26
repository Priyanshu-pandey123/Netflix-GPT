import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{
    console.log('hello')
    const dispatch=useDispatch();
    const getNowPlayingMovie= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION);
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results));
     console.log('!sts');
    }
    
    useEffect(()=>{getNowPlayingMovie();},[])
    

}

export default useNowPlayingMovies;