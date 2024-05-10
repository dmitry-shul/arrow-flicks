'use client'
import React from 'react'
import styles from "./MovieTitle.module.css"
import RateStar from '../UI/RateStar'

const MovieTitle = () => {
  return (
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
  )
}

export default MovieTitle
