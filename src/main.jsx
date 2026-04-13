import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import SideBar from './Components/SideBar/SideBar.jsx';
import Users from './Components/Users/Users.jsx';
import { Suspense } from 'react';
import Users2 from './Components/Users2/Users2.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetail/PostDetail.jsx';

const usePromise=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
const router = createBrowserRouter([
  {
    path: "/", Component:Root,
    children:[
      { index:true,Component: Home },
      {path:'mobile', Component: Mobile},
      {path:'laptop',Component:Laptop},
      {path:'sideBar',Component:SideBar},
      {
        path:'users',Component:Users,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'users2', 
        element:<Suspense fallback={<span>Loading.....</span>}>
        <Users2 usePromise={usePromise}></Users2>
        </Suspense>
      },
      {
        path:'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), Component:UserDetails
      },
        {
          path:'posts',loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'), Component:Posts
        },
        {
          path:'posts/:postId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component: PostDetail
        }
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
