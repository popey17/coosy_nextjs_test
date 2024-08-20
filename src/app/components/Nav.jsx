"use client"
import { useEffect, useState } from "react"
import ThemeToggle from "./parts/ThemeToggle"
import styles from "../page.module.scss"
import Link from 'next/link'

const Nav = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
  }, []);
  


  return (
    <header className={`${styles.header} ${theme === "dark" ? styles.dark : ''}`}>
      <Link href="/">Logo</Link>
      <div className={styles.menuLink}>
        <Link href="/products/1">Products</Link>
      </div>
      {/* <ThemeToggle setTheme={setTheme} theme={theme}/> */}
    </header>
  )
}

export default Nav