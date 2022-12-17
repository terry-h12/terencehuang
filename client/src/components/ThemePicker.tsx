import { useEffect, useState } from "react";

function ThemePicker() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Possible bug 
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggles between dark and light mode
  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button onClick={handleThemeChange} className="bg-green-300 flex">
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ThemePicker;
