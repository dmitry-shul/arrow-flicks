'use client'
import React, { useState } from 'react'
import styles from "./FiltersSort.module.css"
import MultiSelectComp from '@/components/MultiSelectComp/page'
import InputRating from '@/components/InputRating/page'
import SelectorSort from '@/components/SelectorSort/page'

const FiltersSort = ({...props}) => {
  const [filters, setFilters] = useState({
    genres: [],
    releaseYear: "",
    ratingFrom: "",
    ratingTo: "",
    sortBy: "React",
  });

  //console.log(filters)

  const resetFilters = () => {
    setFilters({
      genres: [],
      releaseYear: "",
      ratingFrom: "",
      ratingTo: "",
      sortBy: filters.sortBy,
    })
    //console.log(filters, defaultFilters)
  }

  return (
    <div {...props} className={styles.filtersSort}>
      <div className={styles.filters}>
        <MultiSelectComp 
          label="Genres" 
          placeholder="Select genre" 
          value={filters.genres} 
          setFilters={(e) => setFilters({...filters, genres: e})} 
        />

        <SelectorSort 
          label="Release year" 
          placeholder="Select release year" 
          defaultValue="none" 
          value={filters.releaseYear} 
          setFilters={(e) => setFilters({...filters, releaseYear: e})} 
          style={{margin: "0 16px", marginLeft: "20px"}} 
        />

        <InputRating 
          label="Ratings" 
          placeholder="From"
          value={filters.ratingFrom} 
          setFilters={(e) => setFilters({...filters, ratingFrom: e})} 
        />

        <InputRating 
          label="" 
          placeholder="To" 
          style={{margin: "0 16px 0 8px"}} 
          value={filters.ratingTo} 
          setFilters={(e) => setFilters({...filters, ratingTo: e})} 
        />

        <button 
          onClick={resetFilters} 
          /*disabled={{...filters, sortBy: "React"} == defaultFilters ? true : false} */
          className={styles.resetBtn}
        >Reset filters</button>
      </div>

      <div className={styles.sort}>
        <SelectorSort 
          label="Sort by" 
          placeholder="" 
          defaultValue="React"
          setFilters={(e) => setFilters({...filters, sortBy: e})} 
        />
      </div>
    </div>
  )
}

export default FiltersSort



const defaultFilters = {
  genres: [],
  releaseYear: "",
  ratingFrom: "",
  ratingTo: "",
  sortBy: "React",
}
