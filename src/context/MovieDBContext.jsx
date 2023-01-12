import { createContext, useContext, useEffect, useState } from "react";

export const MovieDBContext = createContext()

const MovieDBProvider = ({ children }) => {


    const [popular, setPopular] = useState([])

    const [genres, setGenres] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [query, setQuery] = useState("")



    const getPopularMovie = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca80c8807e05af97aad35cc9dee29190")
        const data = await res.json()
        setPopular(data.results)
    }

    const getGenres = async () => {
        const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ca80c8807e05af97aad35cc9dee29190")
        const data = await res.json()
        setGenres(data.genres)
    }

    const getSearchedMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ca80c8807e05af97aad35cc9dee29190&query=${query}`)
        const data = await res.json()
        setSearchedMovies(data.results)
    }

    /* const [searchValue, setSearchValue] = useState("")
      let searchedMovies = []
   
     if (!searchValue.length > 1) {
           searchedMovies = popular
       } else {
           searchedMovies = popular.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())
           )
       } */

    const [checked, setChecked] = useState(false)
    const [genresMovies, setGenresMovies] = useState([])

    const handleChange = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked })

        setGenresMovies(
            popular.filter(item =>
                e.target.checked
                && item.genre_ids.toString().includes(e.target.name)
            ))
        /*  console.log(e.target) */
    }



    useEffect(() => {
        getPopularMovie()
    }, [])

    useEffect(() => {
        getGenres()
    }, [])

    useEffect(() => {
        getSearchedMovies()
    }, [query])



    return (
        <MovieDBContext.Provider
            value={{
                popular,
                genres,
                handleChange,
                genresMovies,
                query,
                setQuery,
                getSearchedMovies,
                searchedMovies
            }}>
            {children}
        </MovieDBContext.Provider>
    )
}

export default MovieDBProvider

export const useMovieDBContext = () => useContext(MovieDBContext)