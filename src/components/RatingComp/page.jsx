'use client'
import React from 'react'
import styles from "./RatingComp.module.css"
import { Rating } from '@mantine/core';

const RatingComp = ({myRate, setMyRate}) => {
  return (
    <Rating value={myRate} onChange={setMyRate} count={10} size="xl" className={styles.rating} />
  )
}

export default RatingComp
