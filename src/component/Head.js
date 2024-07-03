  
  import {onAuthStateChanged, signOut } from "firebase/auth";
  import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

  
  const Head = () => {

    const navigate=useNavigate();
  const dispatch=useDispatch();
  
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



    return (<div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
       <img
       className='h-[100px] w-[150px] ml-[150px] z-20'
        src={LOGO}
        alt="logo"
       
       />


      <div className='m-2 z-10'>
       
         <button className='h-[50px] w-[70px] bg-red-500  text-black rounded-full z-20'
         onClick={handleSignOut}
         
         >Sign Out</button>
      </div>


     
    </div>
     
  
    )
  }
  
  export default Head
  