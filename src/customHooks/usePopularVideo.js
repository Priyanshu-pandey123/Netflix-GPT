import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularVideos } from "../utils/movieSlice";
import { useEffect } from "react";



const usePopularVideo=()=>{

    const dispatch=useDispatch();
    const getNowPlayingMovie= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION);
     const json = await data.json();
     dispatch(addPopularVideos(json.results));
    }
    
    useEffect(()=>{getNowPlayingMovie();},[])
    

}

export default usePopularVideo;