import React from 'react'
import { useLocation } from 'react-router-dom'
import { usePokemonContext } from '../context/PokemonContext'

const SearchPage = () => {

  const location = useLocation()



  const { allPokemons } = usePokemonContext()

  const filteredPokemons = allPokemons.filter((item) => item.name.includes(location.state.toLowerCase()))




  return (
    <>

      <div className='flex gap-3 mt-3'>
        {filteredPokemons.map((item) => (
          <article key={item.id} className=" card w-96 bg-base-100 shadow-xl" >
            <figure><img className='w-[150px]' src={item.sprites.other.dream_world.front_default} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.types[0].type.name}</div>
              </h2>
            </div>
          </article>
        ))}
      </div>

    </>
  )
}

export default SearchPage