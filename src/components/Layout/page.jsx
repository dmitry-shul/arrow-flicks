'use client'
import React, { Children } from 'react';
import styles from "./Layout.module.css"
import Header from '../Header/page';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const Layout = ({children}) => {

  return (
    <Provider store={store}>
      <aside className={styles.sideMenu}>
        <Header />
      </aside>

      <div className={styles.main}>
        {children}
      </div>
    </Provider>
  )
}

export default Layout