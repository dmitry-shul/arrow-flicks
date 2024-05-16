'use client'
import React from 'react'
import styles from "./DetailsMainCard.module.css"
import MovieTitle from '../MovieTitle/page'
import { convertMinsToHrsMins } from '@/utils/convertMinsToHrsMins'
import { convertDateToUSFormat } from '@/utils/convertDateToUSFormat'
import { formatCurrency } from '@/utils/formatCurrency'

const DetailsMainCard = ({details}) => {
  const {poster_path, runtime, release_date, budget, revenue, genres} = details

  return (
    <div className={styles.mainCard}>
      {
        poster_path === null
        ? <img className={styles.poster} src="/assets/images/noPosterBig.png" alt="poster not found" />
        : <img className={styles.poster} src={`/img/w300/${poster_path}`} alt="poster" />
      }

      <div className={styles.moviesInfo}>
        <MovieTitle movie={details} />

        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfo__titles}>
            <span>Duration</span>
            <span>Premiere</span>
            <span>Budget</span>
            <span>Gross worldwide</span>
            <span>Genres</span>
          </div>

          <div className={styles.additionalInfo__values}>
            <span>{convertMinsToHrsMins(runtime)}</span>
            <span>{convertDateToUSFormat(release_date)}</span>
            <span>{formatCurrency(budget)}</span>
            <span>{formatCurrency(revenue)}</span>
            <span>{genres?.map(item => item.name).join(", ")}</span>
          </div>
        </div>
      </div>
    </div>      
  )
}

export default DetailsMainCard
