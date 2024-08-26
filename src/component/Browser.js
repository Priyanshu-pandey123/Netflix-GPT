

import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import usePopularVideo from '../customHooks/usePopularVideo';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import GPTSearch from './GPTSearch';
import Head from './Head'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';





const Browser = () => {
     const showGPTSearch=useSelector((store)=>store.gpt.searchToggle);
    useNowPlayingMovies();
     usePopularVideo();
    useTopRatedMovies();


  return (
    <div className=''>
      <Head/>

      {
          showGPTSearch ?    <GPTSearch/> :<>  <MainContainer/> <SecondaryContainer/> </>

      }

    </div>
  )
}

export default Browser
