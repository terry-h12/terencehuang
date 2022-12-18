import { useEffect, useState } from "react";

function ThemePicker() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Bug with Ubuntu and Chrome
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Add or removes dark class for Tailwind
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
    <button onClick={handleThemeChange} className="bg-dracula-green absolute bottom-5 right-5 h-10 w-18">
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ThemePicker;
