import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import SideBar from './Components/SideBar/SideBar.jsx';

const router = createBrowserRouter([
  {
    path: "/", Component:Root,
    children:[
      { index:true,Component: Home },
      {path:'mobile', Component: Mobile},
      {path:'laptop',Component:Laptop},
      {path:'sideBbar',Component:SideBar},
    ]
  },
  {
    path:"about",
    element: <h2>About me here</h2>,
  },
  {
    path:'/app',
    element:<App></App>
  },
  {
    path:'app2',
    Component:App
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
