import { createContext, useContext, useEffect, useState } from "react";

export const EcommerceContext = createContext()

const EcommerceProvider = ({ children }) => {
    const [isOpenCart, setIsOpenCart] = useState(false)

    const [allProducts, setAllProducts] = useState([])

    const [cart, setCart] = useState([])

    const total = cart.reduce((acc, current) => acc + current.price * current.amount, 0)

    const addCart = (product) => {
        const indice = cart.findIndex((item) => item.id === product.id)

        if (indice === -1) {
            return setCart([...cart, { ...product, amount: 1 }])
        } else {
            setCart([...cart], cart[indice].amount++)

        }
    }

    const sumarProducto = (id) => {
        setCart(cart.map(item => item.id === id && { ...item, amount: item.amount + 1 }
        ))
    }



    const getAllProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setAllProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <EcommerceContext.Provider
            value={{ allProducts, setIsOpenCart, isOpenCart, addCart, cart, total, sumarProducto }}>
            {children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceProvider

export const useEcommerceContext = () => useContext(EcommerceContext)