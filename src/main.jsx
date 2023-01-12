import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RickAndMortyProvider from './context/RickAndMortyContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RickAndMortyProvider>
    <App />
    </RickAndMortyProvider>
  </React.StrictMode>,
)
