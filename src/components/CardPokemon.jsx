import { Link } from 'react-router-dom'


const CardPokemon = ({ item }) => {
    return (
        <>
            <Link to={`/pokemon/${item.id}`} className="card w-96 bg-base-100 shadow-xl" >
                <figure  ><img className='w-[150px]' src={item.sprites.other.dream_world.front_default} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.types[0].type.name}</div>
                    </h2>
                </div>
            </Link>

        </>
    )
}

export default CardPokemon