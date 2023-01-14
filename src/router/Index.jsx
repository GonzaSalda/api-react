import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from '../layouts/LayoutPublic'
import Home from '../pages/Home'
import ProductPage from "../pages/ProductPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/product/:id',
                element:<ProductPage/>
            }
        ]
    }
])