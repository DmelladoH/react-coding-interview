import { useState, createContext } from 'react'

export const FiltersContext = createContext()

const INITAL_FILTERS = {
  price: 0,
  category: 'all'
}

// we can use useContext for small states that don't change frequently
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(INITAL_FILTERS)

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
