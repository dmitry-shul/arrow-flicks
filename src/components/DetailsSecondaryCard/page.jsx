'use client'
import React from 'react'
import styles from "./DetailsSecondaryCard.module.css"

const DetailsSecondaryCard = ({...props}) => {
  return (
    <div {...props} className={styles.secondaryCard}>
      <div className={styles.trailer}>
        <h5>Trailer</h5>
        <video src="#" className={styles.video}></video>
      </div>

      <div className={styles.description}>
        <h5>Description</h5>
        <p>Dan Brown's controversial best-selling novel about a powerful secret that's been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard. </p>
      </div>

      <div className={styles.production}>
        <h5>Production</h5>
        <div>
          <span>aa</span>
          <p>Castle Rock Entertainment</p>
        </div>

        <div>
          <span>aa</span>
          <p>Castle Rock Entertainment</p>
        </div>

        <div>
          <span>aa</span>
          <p>Castle Rock Entertainment</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsSecondaryCard
