import React from 'react'
import { useMovieDBContext } from '../../context/MovieDBContext'
import Genres from '../genres/Genres'

const ListGenres = () => {
    const { genres } = useMovieDBContext()
    return (
        <>

            <div>
                {genres.map(item => (
                    <Genres key={item.id} item={item}/>
                ))}
            </div>

        </>
    )
}

export default ListGenres