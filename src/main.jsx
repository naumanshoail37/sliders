import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import NextPage from './Components/NextPage.jsx'
import SecondPage from './Components/SecondPage.jsx'
import Thirdpage from './Components/Thirdpage.jsx'
import ForthPage from './Components/ForthPage.jsx'



const router = createBrowserRouter ([

  {
path:"/",
element:<Home/>,
  },
  {
    path:"/NewPage",
    element:<NextPage/>,
  },
  {
    path:"/NewPage/:username",
    element:<NextPage/>,
  },
  {
    path:"/SecondPage",
    element:<SecondPage/>,
  },
  {
    path:"/ThirdPage",
    element:<Thirdpage/>,
  },
  {
    path:"/ForthPage",
    element:<ForthPage/>,
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
