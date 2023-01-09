import { createContext, useContext, useEffect, useState } from "react";

export const PokemonContext = createContext()



const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)
    const [types, setTypes] = useState([])
    const [isOpenTypes, setIsOpenTypes] = useState(false)



    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    const getPokemons = async() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20'
        const res = await fetch(`${url}&offset=${offSet}`)
        const data = await res.json()
        console.log(data)

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)
        setPokemons([
            ...pokemons, 
            ...results
        ])
        setLoading(false)
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
        setLoading(false)
    }

    const getAllType = async()=>{
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()
        console.log(data)

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)


        setTypes(results)
        
    }



    const getAllPokemonsType = async()=>{
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()

        const promises = data.results.map(async(pokemon) => {
            const res= await fetch(pokemon.url)
            const data= await res.json()
            return data;
        })

        const results = await Promise.all(promises)
        console.log(results)
    }

    const getPokemonById = async(id) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        getPokemons()
    }, [])
    
    useEffect(() => {
        getAllPokemons()
    }, [])
    
    useEffect(() => {
        getAllPokemonsType()
    }, [])

    useEffect(() => {
        getAllType()
    }, [])


    return (
        <PokemonContext.Provider value={{allPokemons,pokemons,getPokemonById, types, isOpenTypes, setIsOpenTypes } } >
            {children}
        </PokemonContext.Provider>
    )
}
export default PokemonProvider

export const usePokemonContext = () => useContext(PokemonContext)