import React from 'react'
import styles from "./Movies.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'
import InputRating from '@/components/InputRating'

const Movies = () => {

  return (
    <>
      <div className={styles.content}>
        <MultiSelectComp />
        <InputRating />
      </div>

      <div className={styles.pagination}>
        33333
      </div>
    </>
  )
}

export default Movies