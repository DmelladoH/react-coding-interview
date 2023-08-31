import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const context = useContext(FiltersContext)

  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }
  const { filters, setFilters } = context

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.price && (
        filters.category === 'all' || product.category === filters.category
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
