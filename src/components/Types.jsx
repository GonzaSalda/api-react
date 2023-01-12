import { usePokemonContext } from "../context/PokemonContext"

const Types = ({ item }) => {

  const { handleChange } = usePokemonContext()



  return (
    <>
      <div className='inline-block px-2 py-2 '>
        <input type='checkbox' name={`${item.name}`} onChange={handleChange} />
        <label className='px-1 font-semibold' htmlFor={item.name}>{item.name}</label>
      </div>

    </>
  )
}

export default Types