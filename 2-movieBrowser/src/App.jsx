import { useState, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/movies'
import debounce from 'just-debounce-it'

import './App.css'

function App () {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)
  const { movies, searchMovies, loading, error } = useMovies({ search, sort })

  const debouncedSearch = useCallback(
    debounce((search) => {
      console.log('searching...')
      searchMovies(search)
    }, 300))

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedSearch(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Browser</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleSearch} placeholder='Iron man, Matrix, Citizen Ken...' />
          <label>sort by year <input type='checkbox' onChange={handleSort} checked={sort} /></label>
          <button>Search</button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
