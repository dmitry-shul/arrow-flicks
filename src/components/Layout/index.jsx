import React, { Children } from 'react';
import styles from "./Layout.module.css"
import Link from 'next/link';
import Image from 'next/image';
import ActiveLink from '../ActiveLink';

const Layout = ({children}) => {

  return (
    <>
      <aside className={styles.sideMenu}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            <img 
              src="./assets/icons/favicon.svg"
              width={32}
              height={32}
              alt="Logo"
            />
            <span>ArrowFlicks</span>
          </Link>

          <nav>
            <ul>
              <li><ActiveLink href="/movies">Movies</ActiveLink></li>
              <li><ActiveLink href="/rated-movies">Rated movies</ActiveLink></li>
            </ul>
          </nav>
        </header>
      </aside>

      <div className={styles.main}>
        {children}
      </div>
    </>
  )
}

export default Layout