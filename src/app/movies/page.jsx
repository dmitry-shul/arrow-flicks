'use client'
import React, { useState, useEffect } from 'react'
import styles from "./Movies.module.css"
import Footer from '@/components/Footer/page'
import FiltersSort from '@/components/FiltersSort/page'
import MoviesList from '@/components/MoviesList/page'
import PaginationComp from '@/components/PaginationComp/page'
import { useFetching } from '@/hooks/useFetching'
import LoaderComp from '@/components/LoaderComp/page'

const Movies = () => {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState({})
  const [filters, setFilters] = useState({
    genres: [],
    releaseYear: null,
    ratingFrom: "",
    ratingTo: "",
    sortBy: "popularity.desc",
  });

  const [fetchMovies, isMoviesLoading, isMoviesLoaded, moviesError] = useFetching(async () => {
    await fetch(`/movie?language=en-US&page=${page}&sort_by=${filters.sortBy}&with_genres=${filters.genres.map(item => item.id).join("%2C")}&primary_release_year=${filters.releaseYear}&vote_average.lte=${filters.ratingTo}&vote_average.gte=${filters.ratingFrom}`)
    .then(response => response.json())
    .then(response => setMovies(response))
  });

  useEffect(() => {
    fetchMovies()
  }, [filters, page])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  return (
    <>
      <section className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Movies</h1>

          <FiltersSort filters={filters} setFilters={setFilters} style={{marginTop: "41px", marginBottom: "24px"}} />

          {
            !isMoviesLoaded
            ? <LoaderComp />
            : movies?.results?.length == 0 || moviesError !== ""
            ? <div className={styles.notFoundMovies}>
                <img src="./assets/images/notFoundMovies.png" alt="Not found" />
                <p>We don't have such movies, look for another one</p>
              </div>
            : <>
                <MoviesList movies={movies} />
                <div className={styles.paginationSection}>
                  <PaginationComp page={page} setPage={setPage} totalPage={movies.total_pages} />
                </div>
              </>
          }
        </div>        
      </section>
      <Footer />
    </>
  )
}

export default Movies