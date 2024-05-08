'use client'
import React from 'react'
import styles from "./MovieCard.module.css"
import RateStar from '../UI/RateStar'

const MovieCard = ({...props}) => {
  return (
    <div {...props} className={styles.card}>
      {/*<img className={styles.poster} src="./assets/images/noPoster.png" alt="poster not found" />*/}
      <img className={styles.poster} src="./assets/images/cardImg.png" alt="poster" />

      <div className={styles.moviesInfo}>
        <div>
          <div className={styles.title}>
            <h4>The Green Mile</h4>
            <div className={styles.rate}>
              <RateStar color={"9854F6"}/>
              <span>9</span>
            </div>
          </div>

          <div className={styles.year}>1999</div>

          <div className={styles.rates}>
            <div className={styles.rate}>
              <RateStar color="FAB005"/>
              <span>9</span>
            </div>
            <p>(2.9M)</p>
          </div>
        </div>

        <div className={styles.genres}>
          <p>Genres</p>
          <span>Drama, Crime, Fantasy</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard