import React from 'react'
import { useMovieDBContext } from '../../context/MovieDBContext'
import Genres from '../genres/Genres'

const ListGenres = () => {
    const { genres } = useMovieDBContext()
    return (
        <>

            <div className='flex  flex-col w-[250px] h-auto absolute top-0 rounded-2xl  bg-slate-500 bg-opacity-95'>
                {genres.map(item => (
                    <Genres key={item.id} item={item}/>
                ))}
            </div>

        </>
    )
}

export default ListGenres