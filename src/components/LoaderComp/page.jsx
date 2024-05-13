'use client'
import React from 'react'
import styles from "./LoaderComp.module.css"
import { Loader } from '@mantine/core';

const LoaderComp = () => {
  return (
    <div className={styles.loader}>
      <Loader color="#9854F6" size="xl" />
    </div>
  )
}

export default LoaderComp
