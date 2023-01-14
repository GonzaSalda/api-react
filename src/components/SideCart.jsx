import { useEcommerceContext } from '../context/EcommerceContext'
import CloseIcon from '../icons/CloseIcon'
import ProductDetail from './ProductDetail'
const SideCart = () => {
    const { isOpenCart, setIsOpenCart, cart,total } = useEcommerceContext()


    const amount = cart.reduce((acc, current) => { return acc + current.amount }, 0)


    return (
        <>

            <div className={`${isOpenCart ? 'right-0' : '-right-full'} absolute bg-white w-full md:w-[350px] h-[auto] top-0   transition-all duration-300 z-20 border rounded-lg`}>{
            }
                <button onClick={() => setIsOpenCart(false)} className={`${isOpenCart ? 'right-0' : '-right-full'}absolute -left-12 border rounded-full my-2`}>
                    <CloseIcon />
                </button>

                <div className='flex justify-center font-semibold'>
                    <h2>{amount} Productos</h2>
                </div>


                {cart.map(item => (
                    <div className='flex flex-col '>
                        <ProductDetail key={item.id} item={item}/>
                    </div>
                ))}
                <p className='font-semibold text-xl p-2'>Total: ${total}</p>

            </div>



        </>
    )
}

export default SideCart