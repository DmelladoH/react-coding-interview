function MoviesList ({ movies }) {
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

function NoMoviesResult () {
  return (
    <p>No movies were found 🥲</p>
  )
}

export function Movies ({ movies }) {
  return movies?.length > 0
    ? <MoviesList movies={movies} />
    : <NoMoviesResult />
}
