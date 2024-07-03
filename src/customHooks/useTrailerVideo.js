import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTrailersVideos } from "../utils/movieSlice";

import { API_OPTION } from "../utils/constant";


const useTrailerVideo=(id)=>{

      const dispatch=useDispatch(); 
        const getMoviesVideos=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'
            +id+
            '/videos?language=en-US', API_OPTION);
        const json=await data.json();
        const filterData=json.results.filter((video)=>video.type=="Trailer");
        const trailer=filterData.length ? filterData[0]:json.results[0];
        console.log(trailer,":form custom Hooks");
        dispatch(addTrailersVideos(trailer));
        

    }

    
  useEffect(()=>{getMoviesVideos()},[]);

}

export default useTrailerVideo