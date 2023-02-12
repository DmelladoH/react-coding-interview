
const KEY = '4287ad07'
const URL = 'https://www.omdbapi.com'

export async function getMovies ({ search }) {
  if (!search) return

  try {
    const response = await fetch(`${URL}/?apikey=${KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error serching movie')
  }
}
