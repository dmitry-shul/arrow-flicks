'use client'
import React from 'react'
import styles from "./MoviesList.module.css"
import MovieCard from '../MovieCard/page'

const MoviesList = ({cards}) => {
  return (
    <div className={styles.cardList}>
      {
        cards.length == 0
        ? <div className={styles.notFoundMovies}>
            <img src="./assets/images/notFoundMovies.png" alt="Not found" />
            <p>We don't have such movies, look for another one</p>
          </div>
        : cards.map((card, index) =>
            <MovieCard 
              key={card} 
              /*style={index === 18 || index === 19 ? {} : {marginBottom: "16px"}} */
            />
          )
      }
    </div>
  )
}

export default MoviesList