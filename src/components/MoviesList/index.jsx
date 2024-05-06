import React from 'react'
import styles from "./MoviesList.module.css"
import MovieCard from '../MovieCard'

const MoviesList = () => {
  return (
    <div className={styles.cardList}>
      {
        cards.map((card, index) =>
          <MovieCard 
            key={card} 
            style={index === 18 || index === 19 ? {} : {marginBottom: "16px"}} 
          />
        )
      }
    </div>
  )
}

export default MoviesList


const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]