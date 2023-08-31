import { useState } from 'react'

export function Product ({ id, title, price, thumbnail, addToCartById, removeFromCartById, isProductAdded: defaultIsProductAdded }) {
  const [isProductAdded, setIsProductAdded] = useState(defaultIsProductAdded)

  const handleRemoveItem = () => {
    removeFromCartById(id)
    setIsProductAdded(!isProductAdded)
  }
  const handleAddItem = () => {
    addToCartById(id)
    setIsProductAdded(!isProductAdded)
  }

  return (
    <article className='bg-white rounded-xl p-3 max-w-xs '>
      <header>
        <img className='rounded-xl h-40' src={thumbnail} alt={title} width='300px' height='200px' />
      </header>
      <div className='p-4'>
        <h3 className='text-lg'>{title}</h3>
      </div>
      <footer className='flex justify-between'>
        <p className='text-blue-500'>${price}</p>
        {
          isProductAdded
            ? <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleRemoveItem}>remove</button>
            : <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleAddItem}>add</button>
        }
      </footer>
    </article>
  )
}
