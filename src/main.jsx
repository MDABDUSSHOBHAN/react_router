import React, { createRef } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About.jsx';
import Home from './Home/Home.jsx';
import Contact from './contact/Contact.jsx';
import First from './component/First.jsx';
import Friends from './Friends/Friends.jsx';
import FriendDetail from './component/FriendDetail.jsx';
import Post from './component/post/Post.jsx';
import THpi from './component/postDetails/THpi.jsx';



// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/About",
//     element: <About></About>
//   },
//   {
//     path: "/Contact",
//     element: <div>This is Contact Now,Right Now</div>,
//   },
//

// ])
//createBrowserRouter([{path: '/',element:<Home></Home>,ehildren:[{paht:'}]}])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,//element <Home><Home>
    children: [
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      //for detail's information Display...
      {
        path:'friend/:friendID',
        element:<FriendDetail></FriendDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path:'/post',
        element: <Post></Post>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'thpi/:friendID',
        element:<THpi></THpi>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <h4>
          Sorry! Page Not Found!</h4>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
 <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
