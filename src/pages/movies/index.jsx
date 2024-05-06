import React from 'react'
import styles from "./Movies.module.css"
import Footer from '@/components/Footer'
import FiltersSort from '@/components/FiltersSort'
import MoviesList from '@/components/MoviesList'

const Movies = () => {

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