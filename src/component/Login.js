

import React, { useRef, useState } from 'react'
import Head from './Head'
import { validateForm } from '../utils/validate';

const Login = () => {
    const [isSignIn ,setIsSignIn] = useState(false);
    const [errorMesage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    let validate;

 const handleClick=()=>{
     validate=validateForm(email.current.value,password.current.value);
     setErrorMessage(validate)
    
 }

  return (
    <div>
     <Head/>
     <div>
        <img
        className='absolute'
        src="https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg"
        alt="logo"
        />
     </div>
     <form className='w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'onSubmit={(e)=>e.preventDefault()} >



       <h1 className='text-3xl font-bold'>{ isSignIn ? "Sign In " : "Sign Up"}</h1>

       {!isSignIn &&  <input type='text' placeholder='Full Name'  className='p-4 my-4 w-full bg-slate-300 rounded-lg '/>}
        <input
        ref={email}
         type='text'
         placeholder='Email Addres '  
         className='p-4 my-4 w-full bg-slate-300 rounded-lg '
         />

        <input
        ref={password}
         type='password'
         placeholder='password' 
          className='p-4 my-4 w-full bg-slate-300 rounded-lg'
          />

        <button className='bg-red-500 w-full p-2 my-2 rounded-lg' onClick={handleClick}>{isSignIn ? "Sign In " : "Sign Up"}</button>
        
        <p className='py-4 cursor-pointer' 
         onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? "sign In Now":"sign Up now"}</p>
         <p className='text-red-700 font-bold text-lg p-2'>{errorMesage}</p>
     </form>
    </div>
  )
}

export default Login
