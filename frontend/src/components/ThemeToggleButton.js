  import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// A simple sun icon for the light theme button.
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// A simple moon icon for the dark theme button.
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// The button that allows users to toggle the theme.
const ThemeToggleButton = () => {
  // Use our custom hook to get the current theme and the function to toggle it.
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin-blue dark:focus:ring-offset-gray-800"
      aria-label="Toggle theme"
    >
      {/* Conditionally render the Moon or Sun icon based on the current theme */}
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggleButton;
