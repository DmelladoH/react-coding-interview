import { products as initialProducts } from './mock/products.json'
import { ProductList } from './componts/ProductList.jsx'
import { Header } from './componts/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './componts/Cart.jsx'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()
  return (
    <CartProvider>
      <main className='bg-blue-100'>
        <Header />
        <Cart />
        <ProductList products={filterProducts(initialProducts)} />
      </main>
    </CartProvider>

  )
}

export default App
