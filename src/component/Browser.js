

import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import Head from './Head'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browser = () => {


     useNowPlayingMovies();


  return (
    <div>
      <Head/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
