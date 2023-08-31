import { useState, createContext } from 'react'

export const CartContext = createContext()

const INITIAL_CART = {}

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(INITIAL_CART)

  const addToCartById = (id) => {
    const product = cart.find((product) => product.id === id)
    if (Object.keys(cart).includes(id.toString())) {
      setCart(prev => {
        const newCart = { ...prev }
        newCart[id].quantity++
        newCart[id].product = product
        return newCart
      })
    } else {
      setCart(prev => ({ ...prev, [product.id]: { quantity: 1, product } }))
    }
  }

  const removeOneUnitFromCartById = (id) => {
    const product = cart.find((product) => product.id === id)

    if (Object.keys(cart).includes(id.toString())) {
      setCart(prev => {
        const newCart = { ...prev }
        if (newCart[id].quantity > 1) {
          newCart[id].quantity--
          newCart[id].product = product
        }
        return newCart
      })
    }
  }

  const removeFromCartById = (id) => {
    if (Object.keys(cart).includes(id.toString())) {
      setCart(prev => {
        const newCart = { ...prev }
        delete newCart[id]
        return newCart
      })
    }
  }
  const cleanCart = () => {
    setCart(INITIAL_CART)
  }

  return (
    <CartContext.Provider value={{ cart, addToCartById, removeOneUnitFromCartById, cleanCart, removeFromCartById }}>
      {children}
    </CartContext.Provider>
  )
}
