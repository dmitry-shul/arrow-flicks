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
import { convertMoviesToArrays } from '@/utils/convertMoviesToArrays'
import { Pagination } from '@mantine/core'
import { useSearch } from '@/hooks/useSearch'

const RatedMovies = () => {
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const mark = useAppSelector((state) => state.genre.mark)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const rates = getRatesFromLocalStorage()
    const movies = rates.map(item => item.movie)
    const searchedMovies = useSearch(movies, searchValue)
    setMovies(convertMoviesToArrays(searchedMovies))
    setIsLoading(false)
  }, [mark, searchValue])

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
                <Search 
                  className={styles.search} 
                  setSearchValue={setSearchValue}
                />
              </div>

              <MoviesList movies={movies[page-1]} />

              <div className={styles.paginationSection}>
                <Pagination 
                  classNames={{
                    dots: styles.dots,
                  }}
                  total={movies.length} 
                  color="#9854F6" 
                  value={page} 
                  onChange={setPage} 
                  siblings={1} 
                  boundaries={0} 
                />
              </div>
            </div> 
        }       
      </section>
    </>
  )
}

export default RatedMovies