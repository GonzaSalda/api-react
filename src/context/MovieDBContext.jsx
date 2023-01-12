import { createContext, useContext, useEffect, useState } from "react";

export const MovieDBContext = createContext()

const MovieDBProvider = ({ children }) => {


    const [popular, setPopular] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [genres, setGenres] = useState([])
    let searchedMovies = []



    const getPopularMovie = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca80c8807e05af97aad35cc9dee29190")
        const data = await res.json()
        setPopular(data.results)
    }
   /*  console.log(popular)
    console.log(genres) */
    const getGenres = async () => {
        const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ca80c8807e05af97aad35cc9dee29190")
        const data = await res.json()
        setGenres(data.genres)
    }

    if (!searchValue.length > 1) {
        searchedMovies = popular
    } else {
        searchedMovies = popular.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    const [checked, setChecked] = useState(false)
    const [genresMovies, setGenresMovies] = useState([])
    
    const handleChange = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked })

        setGenresMovies(
            popular.filter(item =>
            e.target.checked 
            && item.genre_ids.toString().includes(e.target.name)
        ))
        console.log(e.target)
    }

    console.log(genresMovies)

    useEffect(() => {
        getPopularMovie()
    }, [])

    useEffect(() => {
        getGenres()
    }, [])




    return (
        <MovieDBContext.Provider
            value={{
                popular,
                setSearchValue,
                searchedMovies,
                genres,
                handleChange,
                genresMovies
            }}>
            {children}
        </MovieDBContext.Provider>
    )
}

export default MovieDBProvider

export const useMovieDBContext = () => useContext(MovieDBContext)