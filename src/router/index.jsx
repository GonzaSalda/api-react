import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layouts/LayoutPublic";
import HomePage from '../pages/HomePage'
import PokemonPage from '../pages/PokemonPage'
import SearchPage from '../pages/SearchPage'


export const router = createBrowserRouter ([
    {
        path:'/',
        element:<LayoutPublic/>,
        children:[
            {
                index: true,
                element: <HomePage />,
            },
            {
                path:'pokemon/:id',
                element: <PokemonPage/>
            },
            {
                path:'search',
                element: <SearchPage/>
            }
        ]

    }
    
])