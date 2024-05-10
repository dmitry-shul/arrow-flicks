'use client'
import React, { useEffect } from 'react'
import styles from "./Movie.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MovieTitle from '@/components/MovieTitle/page'

const Movie = () => {
    const pathname = usePathname()

  const getMovie = () => {
    /*?language=en-US
    &page=1
    &sort_by=popularity.desc
    &with_genres=11111
    &primary_release_year=22222
    &vote_average.lte=333333
    &vote_average.gte=444444
    */
    const res = fetch("/api/movies?language=en-US&page=1&sort_by=popularity.desc")
    .then(response => response.json())
    .then(response => console.log(response))
  }

  useEffect(() => {
    //getMovie()
  }, []);

  return (
    <section className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/movies">Movies</Link>
          <span>/</span>
          <p>The Green mile</p>
        </div>

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
      </div>        
    </section>    
  )
}

export default Movie