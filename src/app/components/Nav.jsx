"use client"
import { useEffect, useState } from "react"
import ThemeToggle from "./parts/ThemeToggle"
import style from "@/app/page.module.scss"
import Link from 'next/link'

const Nav = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
  }, []);
  


  return (
    <header className={`${style.header} ${theme === "dark" ? style.dark : ''}`}>
      <Link href="/">Logo</Link>
      <ThemeToggle setTheme={setTheme} theme={theme}/>
    </header>
  )
}

export default Nav