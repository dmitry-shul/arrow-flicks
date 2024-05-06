'use client'
import React, { Children } from 'react';
import styles from "./Layout.module.css"
import Header from '../Header/page';

const Layout = ({children}) => {

  return (
    <>
      <aside className={styles.sideMenu}>
        <Header />
      </aside>

      <div className={styles.main}>
        {children}
      </div>
    </>
  )
}

export default Layout