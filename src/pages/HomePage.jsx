import React from 'react'
import ButtonCargarMas from '../components/ButtonCargarMas'
import FilterBar from '../components/FilterBar'
import Navigation from '../components/Navigation'
import PokemonList from '../components/PokemonList'

const HomePage = () => {

  return (

    <>
        <Navigation/>
        <FilterBar />
        <PokemonList />
        <ButtonCargarMas/>

    </>
  )
}

export default HomePage