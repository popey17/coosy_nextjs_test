import style from "@/app/page.module.scss";

const ThemeToggle = ({ setTheme, theme }) => {

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("theme");
  }

  return (
    <button className={style.themeBtn} onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default ThemeToggle