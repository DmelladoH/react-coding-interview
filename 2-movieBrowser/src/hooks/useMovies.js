
import { getMovies } from '../services/movies'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const searchMovies = async () => {
    if (search) {
      console.log(search)
      const movies = await getMovies({ search })
      setMovies(movies)
    }
  }

  return { searchMovies, movies }
}
