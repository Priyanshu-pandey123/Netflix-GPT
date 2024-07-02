

import React from 'react'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browser",
        element:<Browser/>
    }
])



const Body = () => {
  return (
    <div>
   <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
