import React from 'react'
import { useMovieDBContext } from '../context/MovieDBContext'

const SearchMovies = () => {

  const { query, setQuery } = useMovieDBContext()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>

      <div className='flex justify-center'>

        <input
          className="my-5 input input-bordered input-success w-full max-w-xs"
          type="text"
          placeholder="Buscar pelicula"
          value={query}
          onChange={handleChange} />


        {/* <input
      type="text"
      placeholder="Buscar pelicula"   METODO DE BUSQUEDA SIN PARAMETROS EN LA API
      onChange={handleChange} /> */}

      </div>

    </>
  )
}

export default SearchMovies