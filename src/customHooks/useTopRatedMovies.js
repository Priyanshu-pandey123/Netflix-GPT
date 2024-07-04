
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addtopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";



const useTopRatedMovies=()=>{

    const dispatch=useDispatch();
    const getNowPlayingMovie= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTION);
     const json = await data.json();
     console.log(json,"  movie data");
     dispatch(addtopRatedMovies(json.results));
    }
    
    useEffect(()=>{getNowPlayingMovie();},[])
    

}

export default useTopRatedMovies;