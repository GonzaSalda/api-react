import { usePokemonContext } from '../context/PokemonContext'

const Types = ({item}) => {

/*   const {setTypes,types,}= usePokemonContext

  const handleChange = (e) => {
    setTypes({...types,
    [e.target.name] : e.target.checked})
   
   
  }
  console.log(types)
 */
  return (
    <>
    <div className='inline-block px-2 py-2 '>
        <input  type='checkbox'/>
        <label className='px-1 font-semibold' htmlFor={item.name}>{item.name}</label>
    </div>

    </>
  )
}

export default Types