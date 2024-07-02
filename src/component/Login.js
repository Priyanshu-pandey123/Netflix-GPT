
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from 'react'
import Head from './Head'
import { validateForm } from '../utils/validate';
import { auth } from "../utils/firebase";

const Login = () => {
    const [isSignIn ,setIsSignIn] = useState(true);
    const [errorMesage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    let validate;

 const handleClick=()=>{
     validate=validateForm(email.current.value,password.current.value);
     setErrorMessage(validate)

     if(validate) return;

     if(!isSignIn){
        // Add sign up logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMesage);
        });

     }else{
      // add sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
            
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+' '+errorCode);
        });

     }
    
 }

  return (
    <div>
     <Head/>
     <div>
        <img
        className='absolute w-full h-full'
        src="https://t3.ftcdn.net/jpg/03/59/67/36/360_F_359673639_k9QEuA0DxPPUyvEDJccVA9vFMwDpo3JO.jpg"
        alt="logo"
        />
     </div>
     <form className='w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'onSubmit={(e)=>e.preventDefault()} >



       <h1 className='text-3xl font-bold'>{ isSignIn ? "Sign In " : "Sign Up"}</h1>

       {!isSignIn &&  <input type='text' required placeholder='Full Name'  className='p-4 my-4 w-full bg-slate-300 rounded-lg text-black'/>}
        <input
        ref={email}
         type='text'
         placeholder='Email Addres '  
         required
         className='p-4 my-4 w-full bg-slate-300 rounded-lg text-black'
         />

        <input
        ref={password}
         type='password'
         placeholder='password' 
         required
          className='p-4 my-4 w-full bg-slate-300 rounded-lg text-black'
          />

        <button className='bg-red-500 w-full p-2 my-2 rounded-lg' onClick={handleClick}>{isSignIn ? "Sign In " : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' 
         onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? " Not register sign Up Now":"sign In now"}</p>
         <p className='text-red-700 font-bold text-lg p-2'>{errorMesage}</p>
     </form>
    </div>
  )
}

export default Login
