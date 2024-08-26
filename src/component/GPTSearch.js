

import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchSuggestion from './GPTSearchSuggestion'

const GPTSearch = () => {
  return (
    <div>
         <img
        className='absolute w-full h-full -z-10'
        src="https://t3.ftcdn.net/jpg/03/59/67/36/360_F_359673639_k9QEuA0DxPPUyvEDJccVA9vFMwDpo3JO.jpg"
        alt="lo"/>
     <GPTSearchBar/>
    <GPTSearchSuggestion/>
    </div>
  )
}

export default GPTSearch
