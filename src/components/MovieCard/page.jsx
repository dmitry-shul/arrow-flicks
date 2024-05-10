'use client'
import React from 'react'
import styles from "./MovieCard.module.css"
import MovieTitle from '../MovieTitle/page'

const MovieCard = ({...props}) => {
  return (
    <div {...props} className={styles.card}>
      {/*<img className={styles.poster} src="./assets/images/noPoster.png" alt="poster not found" />*/}
      <img className={styles.poster} src="./assets/images/cardImg.png" alt="poster" />

      <div className={styles.moviesInfo}>
        <MovieTitle />

        <div className={styles.genres}>
          <p>Genres</p>
          <span>Drama, Crime, Fantasy</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard