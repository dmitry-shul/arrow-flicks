import React from 'react'
import styles from "./FiltersSort.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'
import InputRating from '@/components/InputRating'
import SelectorSort from '@/components/SelectorSort'

const FiltersSort = ({...props}) => {
  return (
    <div {...props} className={styles.filtersSort}>
      <div className={styles.filters}>
        <MultiSelectComp />
        <MultiSelectComp style={{margin: "0 16px", marginLeft: "20px"}} />
        <InputRating />
        <InputRating style={{margin: "0 16px 0 8px"}} />
        <button disabled={false} className={styles.resetBtn}>Reset filters</button>
      </div>

      <div className={styles.sort}>
        <SelectorSort />
      </div>
    </div>
  )
}

export default FiltersSort