'use client'
import React, { useEffect } from 'react'
import styles from "./Movie.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import DetailsMainCard from '@/components/DetailsMainCard/page'
import DetailsSecondaryCard from '@/components/DetailsSecondaryCard/page'

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

        <DetailsMainCard />
        <DetailsSecondaryCard />

        <div style={{height: "70px"}} />
      </div>        
    </section>    
  )
}

export default Movie