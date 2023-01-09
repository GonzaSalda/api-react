import React from 'react'
import { usePokemonContext } from '../context/PokemonContext'

const ButtonCargarMas = () => {

    const {onClickLoadMore} = usePokemonContext()

    return (
        <>
            <button onClick={onClickLoadMore} className="btn">Cargar más</button>
        </>
    )
}

export default ButtonCargarMas