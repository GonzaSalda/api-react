import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonContext } from '../context/PokemonContext'

const PokemonPage = () => {

  const { getPokemonById } = usePokemonContext()
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])


  return (
    <>

      <article className='grid grid-cols-2 grid-rows-2'>

        <section className='col-start-1 col-end-2 row-start-1 row-end-3'>
          <h2 className='text-7xl font-semibold'>{pokemon.name}</h2>
          <img
            src={pokemon?.sprites?.other?.dream_world.front_default}
            alt={`Pokemon ${pokemon?.name}`}
          />
        </section>
      </article>

    </>
  )
}

export default PokemonPage