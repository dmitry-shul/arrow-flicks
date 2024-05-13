'use client'
import React from 'react'
import styles from "./MovieCard.module.css"
import MovieTitle from '../MovieTitle/page'
import { useAppSelector } from '@/redux/hooks'
import { getGenresName } from '@/utils/getGenresName'

const MovieCard = ({movie, ...props}) => {
  const genres = useAppSelector((state) => state.genre.genres)
  const {poster_path, genre_ids} = movie
  const genresList = getGenresName(genres, genre_ids)

  return (
    <div {...props} className={styles.card}>
      {
        movie.poster_path === ""
        ? <img className={styles.poster} src="/assets/images/noPoster.png" alt="poster not found" />
        : <img className={styles.poster} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="poster" />
      }

      <div className={styles.moviesInfo}>
        <MovieTitle movie={movie} />

        <div className={styles.genres}>
          <p>Genres</p>
          <span>{genresList}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard