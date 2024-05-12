'use client'
import React, { useState, useEffect } from 'react'
import styles from "./Movies.module.css"
import Footer from '@/components/Footer/page'
import FiltersSort from '@/components/FiltersSort/page'
import MoviesList from '@/components/MoviesList/page'
import Modal from '@/components/Modal/page'
import PaginationComp from '@/components/PaginationComp/page'
import RatingComp from '@/components/RatingComp/page'

const Movies = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [filters, setFilters] = useState({
    genres: [],
    releaseYear: null,
    ratingFrom: "",
    ratingTo: "",
    sortBy: "popularity.desc",
  });

  const getMovies = async () => {
    /*?language=en-US
    &page=1
    &sort_by=popularity.desc
    &with_genres=11111
    &primary_release_year=22222
    &vote_average.lte=333333
    &vote_average.gte=444444
    */
    const res = fetch(`/movie?language=en-US&page=1&sort_by=${filters.sortBy}&with_genres=${filters.genres.map(item => item.id)}&primary_release_year=${filters.releaseYear}&vote_average.lte=${filters.ratingTo}&vote_average.gte=${filters.ratingFrom}`)
    .then(response => response.json())
    .then(response => console.log(response))
  }

  useEffect(() => {
    //getMovies()
  }, [filters]);

  return (
    <>
      <section className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Movies</h1>

          <FiltersSort filters={filters} setFilters={setFilters} style={{marginTop: "41px", marginBottom: "24px"}} />

          <MoviesList cards={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} />

          <div className={styles.paginationSection}>
            <PaginationComp />
          </div>
        </div>        
      </section>
      <Footer />
      <Modal visible={visibleModal} setVisible={setVisibleModal} />
    </>
  )
}

export default Movies