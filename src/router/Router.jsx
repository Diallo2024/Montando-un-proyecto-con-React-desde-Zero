import { createBrowserRouter } from "react-router-dom";
import Home from"../pages/Home"
import Contacto from"../pages/Contacto" 
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[{
            path:"home",
            element:<Home/>
        },
    {
        path:"contacto",
        element:<Contacto/>
    }]
    }
])