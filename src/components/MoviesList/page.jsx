'use client'
import React from 'react'
import styles from "./MoviesList.module.css"
import MovieCard from '../MovieCard/page'
import { useRouter } from 'next/navigation'

const MoviesList = ({movies}) => {
  const {push} = useRouter()

  return (
    <div className={styles.cardList}>
      {
        movies?.results?.length == 0
        ? <div className={styles.notFoundMovies}>
            <img src="./assets/images/notFoundMovies.png" alt="Not found" />
            <p>We don't have such movies, look for another one</p>
          </div>
        : movies?.results?.map((movie, index) =>
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onClick={() => push(`/movies/${movie.id}`)}
            />
          )
      }
    </div>
  )
}

export default MoviesList