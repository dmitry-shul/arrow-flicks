'use client'
import React from 'react'
import styles from "./FillButton.module.css"

const FillButton = ({children, ...props}) => {
  
  return (
    <button {...props} className={styles.btn}>{children}</button>
  )
}

export default FillButton
