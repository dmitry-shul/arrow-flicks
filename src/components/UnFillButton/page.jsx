'use client'
import React from 'react'
import styles from "./UnFillButton.module.css"

const UnFillButton = ({children, ...props}) => {
  
  return (
    <button {...props} className={styles.btn}>{children}</button>
  )
}

export default UnFillButton