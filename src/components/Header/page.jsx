'use client'
import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link';
import ActiveLink from '../ActiveLink/page';
import Logo from '../UI/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link href="/movies" className={styles.logo}>
          <Logo />
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