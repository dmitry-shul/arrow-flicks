import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link';
import Image from 'next/image';
import ActiveLink from '../ActiveLink';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link href="/movies" className={styles.logo}>
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
  )
}

export default Header