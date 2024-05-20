'use client'
import React, { useState } from 'react'
import styles from "./Search.module.css"
import Image from 'next/image'

const Search = ({setSearchValue, ...props}) => {
  const [value, setValue] = useState("")

  const setSearch = () => {
    setSearchValue(value)
  }
  
  return (
    <div {...props} className={styles.search}>
      <Image src="./assets/icons/search.svg" width={16} height={16} alt=""  />
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search movie title" />
      <div className={styles.btn}>
          <button onClick={setSearch}>Search</button>
      </div>
    </div>
  )
}

export default Search