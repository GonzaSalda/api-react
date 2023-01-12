const CharacterCard = ({item}) => {
    return (
        <>
    
        <div>
            <img src={item.image} alt="imgCharacter" />
            <h1>{item.name}</h1>
        </div>

        </>
    )
}

export default CharacterCard