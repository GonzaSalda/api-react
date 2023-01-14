import React from 'react'
import { useEcommerceContext } from '../context/EcommerceContext'
import CartIcon from '../icons/CartIcon'
import SideCart from './SideCart'

const Header = () => {
  const { isOpenCart, setIsOpenCart } = useEcommerceContext()

  return (
    <>

      <div>
        <h1>Header</h1>

        <button className='cursor-pointer' onClick={() => setIsOpenCart(!isOpenCart)}>
          <CartIcon />
        </button>

        <SideCart />
      </div>

    </>
  )
}

export default Header