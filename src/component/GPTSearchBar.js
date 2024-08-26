
import React, { useRef } from 'react'
import lan from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openai';


const GPTSearchBar = () =>
   {

   const language=useSelector((store)=>store.config.lan);
   const searchText=useRef(null);



  const handleGPTSearchText=async()=>{
     const searchQuery="Act as a  movie Recommendation system ans suggest movies for the query:"+
     searchText.current.value+
     ". Only Names of the  5 Movies comma seperated ,like example given  ahead Example Result : Gadar ,Shoey, Don,Andaz Apna Apna";
    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchQuery }],
      model: 'gpt-3.5-turbo',
    });


    console.log(GPTResults.choices);  

  }


  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>

        <input
        type='text'
        ref={searchText}
        placeholder={lan[language].placeholder}
        className='p-4 m-4 col-span-9 '   
        />
        <button className='col-span-3 m-3 py-2 px-4 bg-red-700 text-white'  onClick={handleGPTSearchText}>{lan[language].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
