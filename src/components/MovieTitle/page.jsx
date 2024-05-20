'use client'
import React from 'react'
import styles from "./MovieTitle.module.css"
import RateStar from '../UI/RateStar'
import { intToString } from '@/utils/intToString'
import UserRatings from '../UserRatings/page'

const MovieTitle = ({movie}) => {
  const {original_title, release_date, vote_average, vote_count} = movie
  const voteCount = intToString(vote_count) 

  return (
    <div>
      <div className={styles.title}>
        <div className={styles.title__column}>
          <h4>{original_title}</h4>
          <div className={styles.year}>{release_date?.slice(0, 4)}</div>
        </div>
        <UserRatings movie={movie} style={{marginTop: "-4px"}} />
      </div>

      <div className={styles.rates}>
        <div className={styles.rate}>
          <RateStar color="FAB005"/>
          <span>{vote_average?.toFixed(1)}</span>
        </div>
        <p>({voteCount})</p>
      </div>
    </div>
  )
}

export default MovieTitle
