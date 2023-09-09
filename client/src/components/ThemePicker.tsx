import { useEffect, useState } from 'react';
import { DarkModeIcon, LightModeIcon } from './Icons';

const ThemePicker = () => {
  const [theme, setTheme] = useState<string>(() => {
    // Ensures that the theme is persistant on different pages
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null
      ? storedTheme
      : window.matchMedia('(prefer-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // Add or removes dark class for Tailwind
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggles between dark and light mode
  const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button onClick={handleThemeChange} className="absolute bottom-5 right-5 h-10 w-18">
      {theme === 'dark' ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
    </button>
  );
};

export default ThemePicker;
