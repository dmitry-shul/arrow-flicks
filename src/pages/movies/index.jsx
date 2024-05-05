import React, { useEffect } from 'react'
import styles from "./Movies.module.css"
import MultiSelectComp from '@/components/MultiSelectComp'
import axios from 'axios';
import Get from '../api/movies/route';

const Movies = () => {

const getData = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
    .catch(err => console.error(err));
}

useEffect(() => {
  //getData()
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