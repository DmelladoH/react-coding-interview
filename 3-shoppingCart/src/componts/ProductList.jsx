import { Product } from './Product.jsx'
import { useCart } from '../hooks/useCart'

export function ProductList ({ products }) {
  const { cart, addToCartById, removeFromCartById } = useCart()

  const isProductAdded = (product) => Object.keys(cart).includes(product.id.toString())

  return (
    <section className='grid grid-cols-2 gap-4 m-9 sm:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            addToCartById={addToCartById}
            removeFromCartById={removeFromCartById}
            isProductAddedById={isProductAdded(product)}
          />
        )
      })}
    </section>
  )
}
