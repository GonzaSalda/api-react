import React from 'react'
import FilterBar from '../components/FilterBar'
import Navigation from '../components/Navigation'
import PokemonList from '../components/PokemonList'

const HomePage = () => {

  return (

    <>
        <Navigation/>
        <FilterBar />

        <PokemonList />


    </>
  )
}

export default HomePage