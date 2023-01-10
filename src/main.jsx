import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MovieDBProvider from './context/MovieDBContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieDBProvider>
    <App />
    </MovieDBProvider>
  </React.StrictMode>,
)
