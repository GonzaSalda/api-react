import { createContext, useContext, useEffect, useState } from "react";

export const PokemonContext = createContext()



const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)
    const [types, setTypes] = useState([])
    const [isOpenTypes, setIsOpenTypes] = useState(false)


    const getPokemons = async() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=6'
        const res = await fetch(`${url}&offset=${offSet}`)
        const data = await res.json()
        

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)
        
        setPokemons([...pokemons, ...results]) /* Copio el array viejo y le agrego los nuevos 6 pokemons del metodo onClickLoadMore */
    }

    const getAllPokemons = async()=>{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)
        setAllPokemons(results)
    }

    const getAllType = async()=>{
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()
       

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setTypes(results)
        
        console.log(results.name)
    }

    const getPokemonById = async(id) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        return data
    }

    const onClickLoadMore = () => {
        setOffSet(offSet + 6)
    }


    useEffect(() => {
        getPokemons()
    }, [offSet])
    
    useEffect(() => {
        getAllPokemons()
    }, [])
    
    useEffect(() => {
        getAllType()
    }, [])


    return (
        <PokemonContext.Provider value={{allPokemons,pokemons,getPokemonById, types, isOpenTypes, setIsOpenTypes, onClickLoadMore} } >
            {children}
        </PokemonContext.Provider>
    )
}
export default PokemonProvider

export const usePokemonContext = () => useContext(PokemonContext)