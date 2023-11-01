import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Media from "../pages/Media";
import Message from "../pages/Message";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: '/media',
            element: <Media></Media>
        },
        {
            path: '/message',
            element: <Message></Message>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);