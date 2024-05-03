import Link from 'next/link'
import React from 'react'
import styles from "./ActiveLink.module.css"
import { useRouter } from 'next/router'

const ActiveLink = ({children, href, ...props}) => {
  const {pathname} = useRouter()

  console.log(pathname)

  return (
    <Link {...props} className={pathname === href ? styles.activeLink : styles.link} href={href}>{children}</Link>
  )
}

export default ActiveLink