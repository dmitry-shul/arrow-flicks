'use client'
import React, { useEffect } from 'react'
import styles from "./Movies.module.css"
import Footer from '@/components/Footer/page'
import FiltersSort from '@/components/FiltersSort/page'
import MoviesList from '@/components/MoviesList/page'

const Movies = () => {

  const getMovies = () => {
    const res = fetch("/api/movies?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
    .then(response => response.json())
    .then(response => console.log(response))
  }

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <>
      <section className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Movies</h1>

          <FiltersSort style={{marginTop: "41px", marginBottom: "24px"}} />

          <MoviesList />
        </div>        
      </section>
      <Footer />
    </>
  )
}

export default Movies