'use client'
import React from 'react'
import styles from "./PaginationComp.module.css"
import { Pagination } from '@mantine/core';

const PaginationComp = ({page, setPage, totalPage}) => {
  const totalPages = totalPage <= 500 ? totalPage : 500

  if(totalPage < 3) {
    return (
      <Pagination
        classNames={{
          dots: styles.dots,
        }}
        total={totalPage}
        color="#9854F6"
        value={page}
        onChange={setPage}
        siblings={1}
        boundaries={0}
      />
    )
  }

  return (
    <div className={styles.pagination}>
      <button 
        style={page === 1 ? {color: "#D5D6DC", border: "1px solid #EAEBED"} : {}} 
        disabled={page === 1}
        onClick={() => setPage(page-1)}
      >&lsaquo;</button>

      <button 
        style={page === 1 ? {color: "#fff", border: "1px solid #9854F6", background: "#9854F6"} : {}} 
        disabled={page === 1}
        onClick={() => {page === totalPages ? setPage(page-2) : setPage(page-1)}}
      >
        {page === 1 ? page : page === totalPages ? page-2 : page-1}
      </button>

      <button 
        style={page !== 1 && page !== totalPages ? {color: "#fff", border: "1px solid #9854F6", background: "#9854F6"} : {}}
        onClick={() => {page === 1 ? setPage(page+1) : page === totalPages ? setPage(page-1) : {}}}
      >
        {page === 1 ? page+1 : page === totalPages ? page-1 : page}
      </button>

      <button 
        style={page === totalPages ? {color: "#fff", border: "1px solid #9854F6", background: "#9854F6"} : {}} 
        disabled={page === totalPages}
        onClick={() => {page === 1 ? setPage(page+2) : setPage(page+1)}}
      >
        {page === 1 ? page+2 : page === totalPages ? page : page+1}
      </button>

      <button 
        style={page === totalPages ? {color: "#D5D6DC", border: "1px solid #EAEBED"} : {}} 
        disabled={page === totalPages}
        onClick={() => setPage(page+1)}
      >&rsaquo;</button>
    </div>
  )
}

export default PaginationComp

