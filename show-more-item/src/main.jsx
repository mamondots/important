import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/page/Home.jsx';
import About from './assets/page/About/About';
import Game from './Game/Game';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/game',
    element:<Game></Game>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
