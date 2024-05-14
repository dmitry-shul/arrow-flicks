'use client'
import React, { useEffect, useState } from 'react'
import styles from "./RatedMovies.module.css"
import Search from '@/components/Search/page'
import MoviesList from '@/components/MoviesList/page'
import PaginationComp from '@/components/PaginationComp/page'
import Image from 'next/image'
import Link from 'next/link'
import LoaderComp from '@/components/LoaderComp/page'
import { useAppSelector } from '@/redux/hooks'

const RatedMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const mark = useAppSelector((state) => state.genre.mark)

  useEffect(() => {
    const rates = getRatesFromLocalStorage()
    setMovies(rates.map(item => item.movie))
    setIsLoading(false)
  }, [mark])

  const getRatesFromLocalStorage = () => {
    if(localStorage.getItem('rates')) {
      const rates = JSON.parse(localStorage.getItem('rates'))
      return rates
    }
    return []
  }
  
  return (
    <>
      <section className={styles.content}>
        { 
          isLoading
          ? <LoaderComp />
          : movies.length === 0
          ? <div className={styles.notFound}>
              <Image src="/assets/images/notFoundRatedMovies.png" width={400} height={300} alt="Not found rated movies" priority />
              <p>You haven't rated any films yet</p>
              <Link href="/movies" className={styles.button}>Find movies</Link>
            </div>

          : <div className={styles.wrapper}>
              <div className={styles.title}>
                <h1>Rated movies</h1>
                <Search className={styles.search} />
              </div>

              <MoviesList movies={movies} />

              <div className={styles.paginationSection}>
                {/*<PaginationComp page={} setPage={} totalPage={} />*/}
              </div>
            </div> 
        }       
      </section>
    </>
  )
}

export default RatedMovies