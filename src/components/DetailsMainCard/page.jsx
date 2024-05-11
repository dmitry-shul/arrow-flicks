'use client'
import React from 'react'
import styles from "./DetailsMainCard.module.css"
import MovieTitle from '../MovieTitle/page'

const DetailsMainCard = () => {
  return (
    <div className={styles.mainCard}>
      {/*<img className={styles.poster} src="./assets/images/noPoster.png" alt="poster not found" />*/}
      <img className={styles.poster} src="/assets/images/cardImg.png" alt="poster" />

      <div className={styles.moviesInfo}>
        <MovieTitle />

        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfo__titles}>
            <span>Duration</span>
            <span>Premiere</span>
            <span>Budget</span>
            <span>Gross worldwide</span>
            <span>Genres</span>
          </div>

          <div className={styles.additionalInfo__values}>
            <span>3h 09m</span>
            <span>December 6, 1999</span>
            <span>$125,000,000</span>
            <span>$760,006,945</span>
            <span>Drama, Crime, Fantasy</span>
          </div>
        </div>
      </div>
    </div>      
  )
}

export default DetailsMainCard
