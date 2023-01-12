import { useMovieDBContext } from "../context/MovieDBContext"
import PopularMoviesCard from "./PopularMovieCard/PopularMoviesCard"

const PopularMoviesList = () => {
    const { popular, searchedMovies,query,genresMovies } = useMovieDBContext()




    return (
        <>


            <div className="flex flex-wrap gap-10">
                {
                    query.length > 1? (
                        <>
                        {searchedMovies.map((item) => (
                            <PopularMoviesCard key={item.id} item={item} />
                        ))}
                        
                        </>
                    ):
                    (
                        
                            genresMovies.length ?(
                                <>
                                {genresMovies.map((item) => (
                                    <PopularMoviesCard key={item.id} item={item} />
                                ))}
                                
                                </>
                            ):
                            (
                                <>
                                {popular.map((item) => (
                                    <PopularMoviesCard key={item.id} item={item} />
                                 ))}
                                </>
                            )
        
                        
                    )

                }
            </div>

        </>
    )
}

export default PopularMoviesList