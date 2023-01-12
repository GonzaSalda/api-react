import React from 'react'
import { useMovieDBContext } from '../../context/MovieDBContext'

const Genres = ({item}) => {

    const{handleChange}= useMovieDBContext()
    return (
        <>

            <div className='flex m-2 text-2xl text-white items-center'>
                <input type="checkbox" name={`${item.id}`} onChange={handleChange}/>
                <label className='ml-2' htmlFor={item.name}>{item.name}</label>
            </div>

        </>
    )
}

export default Genres