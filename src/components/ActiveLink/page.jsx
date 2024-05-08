'use client'
import Link from 'next/link'
import React from 'react'
import styles from "./ActiveLink.module.css"
import { usePathname } from 'next/navigation'

const ActiveLink = ({children, href, ...props}) => {
  const pathname = usePathname()

  return (
    <Link {...props} className={pathname.includes(href) ? styles.activeLink : styles.link} href={href}>{children}</Link>
  )
}

export default ActiveLink