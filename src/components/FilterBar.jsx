import { usePokemonContext } from '../context/PokemonContext'
import Types from './Types'
import Filter from '../icons/Filter'
const FilterBar = () => {

  
  const { types ,isOpenTypes, setIsOpenTypes} = usePokemonContext()
  return (
    <>
      <button onClick={() => setIsOpenTypes(!isOpenTypes)}><Filter /></button>
      <span>Filtrar</span>
      {
        isOpenTypes && <div className='absolute z-10 rounded-lg  w-[250px] h-auto p-4  bg-slate-50 flex flex-col'>
          {types.map((item) => (
            <Types key={item.id} item={item} />
          ))}
        </div>
      }


    </>
  )
}

export default FilterBar