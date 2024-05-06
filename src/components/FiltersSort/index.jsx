import React from 'react'
import styles from "./FiltersSort.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'
import InputRating from '@/components/InputRating'
import SelectorSort from '@/components/SelectorSort'

const FiltersSort = ({...props}) => {

  return (
    <div {...props} className={styles.filtersSort}>
      <div className={styles.filters}>
        <MultiSelectComp label="Genres" placeholder="Select genre" />

        <MultiSelectComp label="Release year" placeholder="Select release year" style={{margin: "0 16px", marginLeft: "20px"}} />

        <InputRating label="Ratings" placeholder="From" />

        <InputRating label="" placeholder="To" style={{margin: "0 16px 0 8px"}} />

        <button disabled={false} className={styles.resetBtn}>Reset filters</button>
      </div>

      <div className={styles.sort}>
        <SelectorSort />
      </div>
    </div>
  )
}

export default FiltersSort



/*
  {
    genres: "",
    releaseYear: "",
    ratingFrom: "",
    ratingTo: "",
    sortBy: "",
  }
*/