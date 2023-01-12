import React from 'react'
import { useRickAndMortyContext } from '../../context/RickAndMortyContext'

const SearchCharacter = () => {

    const {setSearchValue} = useRickAndMortyContext()

    
    const handleChange=(e) => {
        setSearchValue(e.target.value)
    }

  return (
    <>
    

    <input type="text" placeholder='Search character' onChange={handleChange} />
    
    
    </>
  )
}

export default SearchCharacter