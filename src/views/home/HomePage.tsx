import '../../styles/App.css'
import { useEffect, useState } from 'react'
import type { Movie } from '../../types'
import MoviesList from '../../components/MoviesList'

function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=b82da365ecaa984f4f1426b0c6afddbc')
    .then((res) => res.json())
    .then((res) => {
      setMovies(res.results)
    })
  }, [])

  return (
    <>
      <section className='hero-section'>
        <div className='hero-section__content'>
          <h1>Featured movie</h1>
          <p>
            Movie description
          </p>
          <button className='btn-primary'>
            Watch now
          </button>
        </div>
      </section>
      <main className='page'>
        <MoviesList movies={movies} />
      </main>
    </>
  )
}

export default HomePage
