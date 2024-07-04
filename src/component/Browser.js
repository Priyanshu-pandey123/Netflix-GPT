

import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import usePopularVideo from '../customHooks/usePopularVideo';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import Head from './Head'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browser = () => {


     useNowPlayingMovies();
     usePopularVideo();
    useTopRatedMovies();


  return (
    <div className=''>
      <Head/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
