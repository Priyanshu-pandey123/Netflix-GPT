


import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login';



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
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
