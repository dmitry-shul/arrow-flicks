'use client'
import React from 'react'
import styles from "./Search.module.css"
import Image from 'next/image'

const Search = ({...props}) => {
  
  return (
    <div {...props} className={styles.search}>
        <Image src="./assets/icons/search.svg" width={16} height={16} alt=""  />
        <input type="text" placeholder="Search movie title" />
        <div className={styles.btn}>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Search