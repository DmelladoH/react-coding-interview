import { useEffect, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import './App.css'

function Movies ({ movies }) {
  return (
    <ul className='movie-list'>
      {
        movies?.map((movie) => (
          <li className='movie' key={movie.id}>
            <h4>{movie.title}</h4>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function App () {
  const [search, setSearch] = useState('')
  const { movies, searchMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies()
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Browser</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setSearch(e.target.value)} placeholder='Iron man, Matrix, Citizen Ken...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        {
          movies?.length > 0
            ? <Movies movies={movies} />
            : <p>No movies were found 🥲</p>
        }
      </main>
    </div>
  )
}

export default App
