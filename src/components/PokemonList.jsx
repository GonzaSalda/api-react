import React from 'react'
import { usePokemonContext } from '../context/PokemonContext'
import CardPokemon from '../components/CardPokemon'
const PokemonList = () => {
  
    const {pokemons, isOpenTypes} = usePokemonContext()

    return (
    <>

        <section className="flex gap-9 flex-wrap justify-center ">
            {pokemons.map((item)=>(
                <CardPokemon key={item.id} item={item}/>
            ))}
        </section>
          
    </>
  )
}

export default PokemonList