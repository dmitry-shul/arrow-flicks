'use client'
import React from 'react'
import styles from "./PaginationComp.module.css"
import { Pagination } from '@mantine/core';

const PaginationComp = () => {
  return (
    <Pagination 
      classNames={{
        dots: styles.dots,
      }}
      /*total={Math.ceil(data.length / 20)}*/ 
      total={10} 
      color="#9854F6" 
      siblings={1}
      boundaries={0} 
    />
  )
}

export default PaginationComp