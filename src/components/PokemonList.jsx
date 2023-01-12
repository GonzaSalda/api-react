import { usePokemonContext } from '../context/PokemonContext'
import CardPokemon from '../components/CardPokemon'
const PokemonList = () => {

    const { pokemonsFiltered, pokemons } = usePokemonContext()

    return (
        <>

            <section className="flex gap-9 flex-wrap justify-center ">
                
                {pokemonsFiltered.length ? (
                    <>
                        {pokemonsFiltered.map((item) => (
                            <CardPokemon key={item.id} item={item} />
                        ))}
                    </>
                ) : (
                    <>
                        {pokemons.map((item) => (
                            <CardPokemon key={item.id} item={item} />
                        ))}
                    </>
                )

                }

            </section>

        </>
    )
}

export default PokemonList