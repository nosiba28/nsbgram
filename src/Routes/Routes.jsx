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
import PostDetails from "../pages/PostDetails";
import PrivateRoute from "./PrivateRoute";

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
          path: "/postDetails/:id",
          element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://nsbgram-server.vercel.app/myposts/${params.id}`)
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