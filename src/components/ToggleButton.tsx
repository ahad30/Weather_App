import { useEffect, useState } from "react";


const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <div><button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-black px-2 py-1 rounded-md text-sm transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button></div>
  )
}

export default ToggleButton