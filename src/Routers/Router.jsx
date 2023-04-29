import {
  Navigate,
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Register/Register";
import PrivetRouters from "./PrivetRouters";
import Terms from "../pages/Share/Terms/Terms";
const router = createBrowserRouter([
  {   
    path:'/',
    element:<Navigate to='/category/0' ></Navigate>
    

 },
{
   path:'/',
   element:<LoginLayout></LoginLayout>,
   children:[
     {
        path:'/login',
        element:<Login></Login>
     },
     {
       path:'/register',
       element:<Register></Register>
     },
     {
      path:'terms',
      element:<Terms></Terms>
     }
   ]
 },
    {
      path: "category",
      element: <Main></Main>,
      children:[
      
        {
          path:':id',
          element:<Category></Category>,
          loader:({params})=> fetch(`http://localhost:5000/category/${params.id}` )
        },
       
      ]
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children:[
         {
          path:':id',
          element:<PrivetRouters><News></News></PrivetRouters>,
          loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
          
         }
      ]
    }
  ]);
export default router