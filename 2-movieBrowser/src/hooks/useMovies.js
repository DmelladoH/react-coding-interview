
import { getMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const previusSearch = useRef(search)// a reference that persists between renderings

  const searchMovies = useCallback(async (search) => {
    if (search === previusSearch.current) return

    try {
      setLoading(true)
      previusSearch.current = search
      const movies = await getMovies({ search })

      setMovies(movies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // use memo to memorize values, useCallback for memorize functions
    return sort
      ? [...movies].sort((a, b) => b.year - a.year)
      : movies
  }, [sort, movies])

  // useMemo, to be used when there is bad performance when doing certain calculations. Do not overuse

  return { searchMovies, movies: sortedMovies, loading, error }
}
