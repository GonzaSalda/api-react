import { useMovieDBContext } from "../context/MovieDBContext"
import PopularMoviesCard from "./PopularMovieCard/PopularMoviesCard"

const PopularMoviesList = () => {
    const { genresMovies, popular,searchedMovies } = useMovieDBContext()




    return (
        <>


            <div className="flex flex-wrap gap-10">
                {
                    genresMovies.length ?(
                        <>
                        {genresMovies.map((item) => (
                            <PopularMoviesCard key={item.id} item={item} />
                        ))}
                        
                        </>
                    ):
                    (
                        <>
                        {searchedMovies.map((item) => (
                            <PopularMoviesCard key={item.id} item={item} />
                         ))}
                        </>
                    )

                }
            </div>

        </>
    )
}

export default PopularMoviesList