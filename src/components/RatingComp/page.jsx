'use client'
import React, { useState, useEffect } from 'react'
import styles from "./RatingComp.module.css"
import { Rating } from '@mantine/core';

const RatingComp = ({myRate, setMyRate}) => {
  const [clientWidth, setClientWidth] = useState()

  useEffect(() => {
    setClientWidth(window.innerWidth)
    const clientWidth = window.addEventListener('resize',(e) => {
      setClientWidth(window.innerWidth)
    });
    return () => window.removeEventListener("resize", clientWidth)
  }, [])

  return (
    <Rating value={myRate} onChange={setMyRate} count={10} size={clientWidth > 420 ? "xl" : "lg"} className={styles.rating} />
  )
}

export default RatingComp
