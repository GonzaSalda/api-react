import React from 'react'
import ListGenres from './components/listgenres/ListGenres'
import PopularMoviesList from './components/PopularMoviesList'
import SearchMovies from './components/SearchMovies'

const App = () => {
  return (
    <>
    <SearchMovies/>
    <PopularMoviesList/>
    <ListGenres/>
    </>
  )
}

export default App