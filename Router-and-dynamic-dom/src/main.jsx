import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Services from '../pages/Services.jsx'
import Home from '../pages/Home.jsx'
import Singleuser from '../pages/Singleuser.jsx'







const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
     {
      path:"",
      element:<Home/>
     },
      {
      path:"about",
      element:<About/>,
      },
      {
        path:"Contact",
       element:<Contact/>,
      },
      {
        path:"Services",
        element:<Services/>,
      },
      {
        path:'Singleuser/:id',
        element:<Singleuser/>
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
