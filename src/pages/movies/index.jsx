import React from 'react'
import styles from "./Movies.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'

const Movies = () => {
  return (
    <>
      <div className={styles.content}>
        <MultiSelectComp />
      </div>

      <div className={styles.pagination}>
        33333
      </div>
    </>
  )
}

export default Movies