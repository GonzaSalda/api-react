import { createContext, useContext } from "react";

export const MovieDBContext = createContext()

const MovieDBProvider = ({children}) => {
    return (
        <MovieDBContext.Provider>
            {children}
        </MovieDBContext.Provider>
    )
}

export default MovieDBProvider 

export const useMovieDBContext = () => useContext(MovieDBContext)