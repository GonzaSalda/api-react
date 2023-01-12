import React from 'react'
import { useMovieDBContext } from '../../context/MovieDBContext'

const Genres = ({item}) => {

    const{handleChange}= useMovieDBContext()
    return (
        <>

            <div >
                <input type="checkbox" name={`${item.id}`} onChange={handleChange}/>
                <label htmlFor={item.name}>{item.name}</label>
            </div>

        </>
    )
}

export default Genres