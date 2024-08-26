  
  import {onAuthStateChanged, signOut } from "firebase/auth";
  import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleSearch } from "../utils/GPTslice";
import { addLanguage } from "../utils/configSlice";

  
  const Head = () => {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
   const user=useSelector((store)=>store.user);
    const handleSignOut=()=>{
    

  
      signOut(auth).then(() => {
      }).catch((error) => {
        // An error happened.
      });
    }



    useEffect(()=>{




     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
        
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          
          navigate('/browse')
        } else {
          // User is signed out
         dispatch(removeUser());
         navigate('/');
         
  
  
        }
      });
  
    return()=>{
      unsubscribe();
    }
      
    },[])

  
      const handleGPTsearch=()=>{
        dispatch(toggleSearch());
      }
   
        const handleLanguageSearch=(e)=>{
          console.log(e.target.value);
          dispatch(addLanguage(e.target.value));
        }

      const isSearchTrue=useSelector((store)=>(store.gpt.searchToggle));
      console.log(isSearchTrue,"tureeeeeeeeeeee");

    return (<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
       <img
       className='h-[100px] w-[150px] ml-[150px] z-20'
        src={LOGO}
        alt="logo"
       
       />


      <div className='m-2 z-10'>
      {
        user
         &&
      (<div flex p-2>
       {
        isSearchTrue &&  <select className="px-4 mx-2 py-2 bg-gray-600 text-white " onChange={handleLanguageSearch}>
        {SUPPORTED_LANGUAGE.map((lan)=><option key={lan.indentifier} value={lan.indentifier} >{lan.name}</option>)}
      </select>
       }
        <button className="px-4 py-2 mx-2 bg-purple-600 text-white rounded-lg" onClick={handleGPTsearch}>Search</button>
        <button className='px-4 py-2 bg-red-500 text-white rounded-lg'onClick={handleSignOut}>Sign Out</button>
      </div>)
       
      }
      </div>


     
    </div>
     
  
    )
  }
  
  export default Head
  