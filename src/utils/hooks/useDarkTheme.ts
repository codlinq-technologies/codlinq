import { useEffect, useState } from "react";

export function useDarkTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme"); // Load localStorage if present
    if (theme === "dark") return true;
    if (theme === "light") return false;
  });

  // Apply theme on first load and state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleDarkMode };
}
