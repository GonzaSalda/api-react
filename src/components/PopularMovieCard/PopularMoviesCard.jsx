import './index.css'


const PopularMoviesCard = ({ item }) => {
    return (
        <>
            {
                <div className="card">
                    
                        <img className="card2" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                </div>
            }
        </>
    )
}

export default PopularMoviesCard