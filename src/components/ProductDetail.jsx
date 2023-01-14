import { useEcommerceContext } from "../context/EcommerceContext"

const ProductDetail = ({item}) => {
   
    const {sumarProducto,restarProducto} = useEcommerceContext()
  return (
    <>
    
    <div className='flex items-center gap-5 border m-2 p-2 rounded-xl'>
  
        <div>
        <p className='text-xs'>{item.title}</p>
            <div className='flex gap-4'>
                <button onClick={()=> restarProducto(item.id)}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => sumarProducto(item.id)}>+</button>    
            </div>

        </div>
       <img className='w-[100px] h-[100px] object-contain' src={item.image} alt="" />
    </div>
    
    
    </>
  )
}

export default ProductDetail