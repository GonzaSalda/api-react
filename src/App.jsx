import React from 'react'
import CharacterList from './components/characterList/CharacterList'
import SearchCharacter from './components/searchCharacter/SearchCharacter'
import FilterBySpecies from './components/species/FilterBySpecies'

const App = () => {
  return (
    <>
    
    <SearchCharacter/>
    <CharacterList/>
    <FilterBySpecies/>
    
    </>
  )
}

export default App