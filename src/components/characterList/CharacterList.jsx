import { useRickAndMortyContext } from "../../context/RickAndMortyContext"
import CharacterCard from '../characterCard/CharacterCard'

const CharacterList = () => {
    const { allCharacterBySpecies, allCharacters } = useRickAndMortyContext()

    return (
        <>

            {
                allCharacterBySpecies.length ? (
                    <>
                        <div className="flex flex-wrap gap-10 justify-around">
                            {
                                allCharacterBySpecies.map(item => (
                                    <CharacterCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-wrap gap-10 justify-around">
                            {
                                allCharacters.map(item => (
                                    <CharacterCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </>
                )
            }

        </>
    )
}

export default CharacterList