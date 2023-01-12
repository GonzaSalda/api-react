import { useMovieDBContext } from "../context/MovieDBContext"
import PopularMoviesCard from "./PopularMovieCard/PopularMoviesCard"

const PopularMoviesList = () => {
    const { searchedMovies } = useMovieDBContext()




    return (
        <>


            <div className="flex flex-wrap gap-10">
                {searchedMovies.map((item) => (
                    <PopularMoviesCard key={item.id} item={item} />
                ))}
            </div>

        </>
    )
}

export default PopularMoviesList