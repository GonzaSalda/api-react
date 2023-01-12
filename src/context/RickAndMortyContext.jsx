import { createContext, useContext, useEffect, useState } from "react";

export const RickAndMortyContext = createContext()

const RickAndMortyProvider = ({ children }) => {
    const [species, setSpecies] = useState('')
    const URL = (`https://rickandmortyapi.com/api/character?&species=${species}`)
    const [allCharacters, setAllCharacters] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [allSpeciesChecked, SetAllSpeciesChecked] = useState({
        human: false,
        alien: false,
        humanoid: false,
        poopybutthole: false,
        robot: false

    })

    const [allCharacterBySpecies, setAllCharacterBySpecies] = useState([])

    const handleCheckbox = (e) => {
        SetAllSpeciesChecked({ ...allSpeciesChecked, [e.target.name]: e.target.checked })
        setSpecies(e.target.name)     
        
        setAllCharacterBySpecies(
            allCharacters.filter(item => 
            e.target.checked 
            && item.species.toLowerCase().includes(e.target.name) 
        ))
           
    }

    const getAllCharacters = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setAllCharacters(data.results)
    }

    const getAllCharacterBySearch = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        const data = await res.json()
        setAllCharacters(data.results)
    }

    useEffect(() => {
        getAllCharacterBySearch()
    }, [searchValue])


    useEffect(() => {
        getAllCharacters()
    }, [])
    console.log(allCharacterBySpecies)
    

    return (
        <RickAndMortyContext.Provider
            value={{
                allCharacters,
                allCharacterBySpecies,
                setSearchValue,
                handleCheckbox
            }}>
            {children}
        </RickAndMortyContext.Provider>
    )
}

export default RickAndMortyProvider

export const useRickAndMortyContext = () => useContext(RickAndMortyContext)