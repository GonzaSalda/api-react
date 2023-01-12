import React from 'react'
import { useMovieDBContext } from '../context/MovieDBContext'

const SearchMovies = () => {

    const {setSearchValue} = useMovieDBContext()

    const handleChange = (e) =>{
        setSearchValue(e.target.value)
    }

  return (
    <>

<input type="text" placeholder="Buscar pelicula" onChange={handleChange}/>
    
    </>
  )
}

export default SearchMovies