import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="ml-4 text-gray-800 dark:text-gray-200">
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default ThemeToggle;

