import styles from "../../page.module.scss";

const ThemeToggle = ({ setTheme, theme }) => {

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("theme");
  }

  return (
    <button className={styles.themeBtn} onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default ThemeToggle