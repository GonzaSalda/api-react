import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import { useEcommerceContext } from '../context/EcommerceContext'

const Home = () => {

  const { allProducts } = useEcommerceContext()

  const filteredProducts = allProducts.filter(item =>
    item.category === "electronics")

  return (
    <>

      <div className='container mx-auto'>
    <Header/>
        <div className="grid md:grid-cols-5 md:grid-rows-2 gap-5 py-5">
          {filteredProducts.map(item => (
            <Product key={item.id} item={item} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Home