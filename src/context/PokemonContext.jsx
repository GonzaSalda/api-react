import { createContext, useContext, useEffect, useState } from "react";

export const PokemonContext = createContext()


const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)

    const [types, setTypes] = useState([])
    const [isOpenTypes, setIsOpenTypes] = useState(false)
 

    const getPokemons = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=6'
        const res = await fetch(`${url}&offset=${offSet}`)
        const data = await res.json()

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setPokemons([...pokemons, ...results]) /* Copio el array viejo y le agrego los nuevos 6 pokemons del metodo onClickLoadMore */
    }


    const getAllPokemons = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0'
        const res = await fetch(`${url}&offset=${offSet}`)
        const data = await res.json()


        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemons(results)
    }

    const getAllType = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()


        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setTypes(results)

    }

    const getPokemonById = async (id) => {
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
        getAllType()
    }, [])

    useEffect(() => {
        getAllPokemons()
    }, [])


    const [checked, setChecked] = useState(false) /* A diferencia con el value el checked devuelve un booleano */
    const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  
    const handleChange = (e) => {
        setChecked({...checked, [e.target.name]: e.target.checked})
       
        setPokemonsFiltered(
            allPokemons.filter(item =>
                e.target.checked
                && item.types.map(item => item.type.name).includes(e.target.name)
            )
        );


/* 
      setPokemonsFiltered(
            allPokemons.filter(item => {
                if (e.target.checked) {
                    return item.types.map(item => item.type.name).includes(e.target.name)
                }
            })
        );
         */


/*         if (e.target.checked) {
           const newPokemonsFiltered  =  [...pokemonsFiltered,...allPokemons] EN ESTA LINEA SE MULTIPLICA LA KEY
                    setPokemonsFiltered(newPokemonsFiltered)
        }else {
			const newPokemonsFiltered = pokemonsFiltered.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setPokemonsFiltered([...newPokemonsFiltered]);
		} */
    }

    console.log(pokemonsFiltered)


    return (
        <PokemonContext.Provider
            value={{
                handleChange,
                checked,
                setChecked,
                pokemons,
                getPokemonById,
                types,
                isOpenTypes,
                setIsOpenTypes,
                onClickLoadMore,
                pokemonsFiltered
            }}>
            {children}
        </PokemonContext.Provider>
    )
}
export default PokemonProvider

export const usePokemonContext = () => useContext(PokemonContext)