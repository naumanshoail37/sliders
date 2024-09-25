import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import NextPage from './NextPage.jsx'
import SecondPage from './Components/SecondPage.jsx'
import Thirdpage from './Components/Thirdpage.jsx'



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

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
