import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import PokemonProvider from './context/PokemonContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>


  </React.StrictMode>,
)
