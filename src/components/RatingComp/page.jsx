'use client'
import React from 'react'
import styles from "./RatingComp.module.css"
import { Rating } from '@mantine/core';

const RatingComp = () => {
  return (
    <Rating count={10} size="xl" className={styles.rating} />
  )
}

export default RatingComp
