'use client'
import React, { useState } from 'react'
import styles from "./RatedMovies.module.css"
import Modal from '@/components/Modal/page'
import Search from '@/components/Search/page'
import MoviesList from '@/components/MoviesList/page'
import PaginationComp from '@/components/PaginationComp/page'
import Image from 'next/image'
import Link from 'next/link'

const RatedMovies = ({cards=[]}) => {
  const [visibleModal, setVisibleModal] = useState(false)
  
  return (
    <>
      <section className={styles.content}>
        {
          cards.length === 0
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

              <MoviesList cards={cards} />

              <div className={styles.paginationSection}>
                {/*<PaginationComp />*/}
              </div>
            </div> 
        }       
      </section>
      <Modal visible={visibleModal} setVisible={setVisibleModal} />
    </>
  )
}

export default RatedMovies