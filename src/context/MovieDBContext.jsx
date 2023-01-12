import { createContext, useContext, useEffect, useState } from "react";

export const MovieDBContext = createContext()

const MovieDBProvider = ({ children }) => {


    const [popular, setPopular] = useState([])
    const [searchValue, setSearchValue] = useState("")
    let searchedMovies = []



    const getPopularMovie = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca80c8807e05af97aad35cc9dee29190")
        const data = await res.json()
        setPopular(data.results)
    }



    if (!searchValue.length > 1) {
        searchedMovies = popular
    } else {
        searchedMovies = popular.filter(item =>  item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    console.log(searchedMovies)


    useEffect(() => {
        getPopularMovie()
    }, [])


    console.log(popular)

    return (
        <MovieDBContext.Provider
          value={{
          popular,
          setSearchValue,
          searchedMovies
          }}>
            {children}
        </MovieDBContext.Provider>
    )
}

export default MovieDBProvider

export const useMovieDBContext = () => useContext(MovieDBContext)