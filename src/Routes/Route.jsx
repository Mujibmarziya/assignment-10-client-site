import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Mainlayout from '../Layouts/Mainlayout';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Additems from '../Pages/Additems';
import Privateroute from './Privateroute';
import AllArtAndCraft from '../Pages/AllArtAndCraft';
import MyArtAndCraft from '../Pages/MyArtAndCraft';
import Details from '../Pages/Details';
import Update from '../Pages/Update';
import FilterSubCat from '../Pages/FilterSubCat';
import Error from '../ErrorPage/Error';

  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
      },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/additem",
          element:<Privateroute><Additems></Additems></Privateroute>
      },
      {
        path:"/allart",
        element:<AllArtAndCraft></AllArtAndCraft>
    },

    {
      path: "/detail/:_id",
  element: <Details></Details>,
  loader: ({params}) => fetch(`https://assignment-10-server-blond-eight.vercel.app/items/${params._id}`)
  
    },
    {
      path: "/update/:_id",
  element:<Privateroute> <Update></Update></Privateroute>,
  loader: ({params}) => fetch(`https://assignment-10-server-blond-eight.vercel.app/items/${params._id}`)
  
    },
    {
      path: "/filterSubItems/:subcategory_Name",
  element:<Privateroute><FilterSubCat></FilterSubCat></Privateroute>,
  // loader: ({params}) => fetch(`https://assignment-10-server-blond-eight.vercel.app/items/${params.subcategory_Name}`)
  
    },
    {
      path:"/myart",
      element:<Privateroute><MyArtAndCraft></MyArtAndCraft></Privateroute>
  },
      ]
    },

  ]);

export default Route;