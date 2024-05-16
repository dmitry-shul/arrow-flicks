'use client'
import React from 'react'
import styles from "./notFound.module.css"
import Link from 'next/link'
import Logo from '@/components/UI/Logo'
import Image from 'next/image'
import FillButton from '@/components/FillButton/page'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Link href="/movies" className={styles.logo}>
        <Logo />
        <span>ArrowFlicks</span>
      </Link>

      <div className={styles.article}>
        <Image width={656} height={196} src="/assets/images/pageNotFound.png" alt="Page Not Found" priority />
        <p>We can’t find the page you are looking for</p>
        <Link href="/movies">
          <FillButton>Go Home</FillButton>
        </Link>
      </div>
    </div>
  )
}

export default NotFound