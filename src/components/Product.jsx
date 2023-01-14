import React from 'react'
import { Link } from 'react-router-dom'
import { useEcommerceContext } from '../context/EcommerceContext'
import CartIcon from '../icons/CartIcon'
import ShowIcon from '../icons/ShowIcon'

const Product = ({ item }) => {

    const {addCart} = useEcommerceContext()
    return (
        <>
            <div>


                <div className='relative flex flex-col border-2 justify-center items-center w-auto h-[300px] group transition overflow-hidden '> 
                    <div className='flex justify-center items-center w-[200px]'>
                        <img className='h-[150px] group-hover:scale-110 duration-300' src={item.image} alt="" />
                    </div>
                    <div className='absolute top-6 -right-11 flex gap-2 group-hover:right-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <button onClick={() => addCart(item)}>
                            <CartIcon />
                        </button>
                        <Link to={`/product/${item.id}`}>
                            <ShowIcon className="w-[35px] h-[35px]" />
                        </Link>
                    </div>
                </div>

                <div>
                    <p className='text-base'>{item.title}</p>
                    <p className='font-semibold text-base'>${item.price}</p>
                </div>


            </div>

        </>
    )
}

export default Product