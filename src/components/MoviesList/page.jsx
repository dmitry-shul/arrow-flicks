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
        movies?.results?.map((movie, index) =>
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