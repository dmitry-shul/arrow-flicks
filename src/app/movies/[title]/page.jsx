'use client'
import React, { useEffect } from 'react'
import styles from "./Movie.module.css"
import { usePathname } from 'next/navigation'

const Movie = () => {
    const pathname = usePathname()

  const getMovie = () => {
    /*?language=en-US
    &page=1
    &sort_by=popularity.desc
    &with_genres=11111
    &primary_release_year=22222
    &vote_average.lte=333333
    &vote_average.gte=444444
    */
    const res = fetch("/api/movies?language=en-US&page=1&sort_by=popularity.desc")
    .then(response => response.json())
    .then(response => console.log(response))
  }

  useEffect(() => {
    //getMovie()
  }, []);

  return (
    <>
      eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee {pathname}
    </>
  )
}

export default Movie