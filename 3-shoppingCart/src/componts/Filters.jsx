import { useContext, useId } from 'react'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)

  // in a large app, it could be deficoult to keep track of all the ids, and
  // it could be a problem if we have two components with the same id, therefore useId is a good solution
  const filterPriceId = useId()
  const filterCategoryId = useId()

  const onChangePrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: event.target.value
    }))
  }

  const onChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value
    }))
  }

  return (
    <section className='flex justify-center'>
      <section className='flex mr-3'>
        <label htmlFor={filterPriceId} className='p-2'>Price</label>
        <input id={filterPriceId} type='range' className='p-2' onChange={onChangePrice} value={filters.price} min='0' max='2000' />
        <p>${filters.price}</p>
      </section>
      <section>
        <label htmlFor={filterCategoryId} className='p-2'>Category</label>
        <select id={filterCategoryId} className='capitalize' onChange={onChangeCategory} value={filters.category}>
          <option value='all'>All</option>
          <option value='laptops'>laptops</option>
          <option value='smartphones'>smartphones</option>
          <option value='fragrances'>fragrances</option>
          <option value='skincare'>skincare</option>
          <option value='groceries'>groceries</option>
          <option value='home-decoration'>home-decoration</option>
        </select>
      </section>
    </section>
  )
}
