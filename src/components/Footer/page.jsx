'use client'
import React from 'react'
import styles from "./Footer.module.css"
import PaginationComp from '../PaginationComp/page'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <PaginationComp />
    </div>
  )
}

export default Footer