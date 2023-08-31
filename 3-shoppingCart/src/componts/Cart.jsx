import { useId, useState } from 'react'
import { useCart } from '../hooks/useCart'

function ProductCart ({ id, title, price, thumbnail, removeFromCartById, addToCartById, removeOneUnitFromCartByid }) {
  const unitPrice = Number(price)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(unitPrice)

  const removeProduct = () => {
    removeFromCartById(id)
  }

  const decreaseQuantity = () => {
    if (quantity === 1) return
    setTotalPrice(totalPrice - unitPrice)
    setQuantity(quantity - 1)
    removeOneUnitFromCartByid(id)
  }

  const increaseQuantity = () => {
    if (quantity === 99) return
    setTotalPrice(totalPrice + unitPrice)
    setQuantity(quantity + 1)
    addToCartById(id)
  }
  return (
    <li>
      <img className='w-52 h-100' src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <footer className='flex gap-2'>
        <div className='flex gap-2'>
          <button className='bg-gray-500 px-1 hover:bg-gray-400' onClick={decreaseQuantity}> - </button>
          <span>{quantity}</span>
          <button className='bg-gray-500 px-1 hover:bg-gray-400' onClick={increaseQuantity}> + </button>
        </div>
        <strong> ${totalPrice} </strong>
        <button onClick={removeProduct} className='bg-red-500'>remove</button>
      </footer>

    </li>
  )
}

function CartBody () {
  const { cart, removeOneUnitFromCartById, addToCartById, removeFromCartById, cleanCart } = useCart()

  return (
    <aside className='fixed top-px right-px pt-16 p-10 w-100 bg-white'>
      <header>
        <h2>Cart</h2>
      </header>
      <ul>{
        Object.entries(cart).map(([key, value]) => {
          console.log(key, value)
          return (
            <ProductCart
              key={key} {...value.product}
              removeFromCartById={removeOneUnitFromCartById}
              addToCartById={addToCartById}
              removeOneUnitFromCartByid={removeFromCartById}
            />
          )
        })
        }
      </ul>
      <footer>
        <p>Total: $100</p>
        <button>Checkout</button>
      </footer>
    </aside>
  )
}
export function Cart () {
  const cardId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const onChangeVisibility = (event) => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <label htmlFor={cardId} className='bg-blue-500 z-50 text-white fixed top-2 right-2 w-12 h-12 rounded-full p-2 text-center cursor-pointer'>Cart</label>
      <input type='checkbox' id={cardId} hidden onChange={(onChangeVisibility)} />
      {isOpen && <CartBody />}
    </>
  )
}
