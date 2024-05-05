import React, { useEffect } from 'react'
import styles from "./Movies.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'
import axios from 'axios';

const Movies = () => {

const getData = async () => {
  const res = await axios.get('/movies')
  /*.then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));*/

  console.log(res)
}

useEffect(() => {
  getData()
}, []);

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