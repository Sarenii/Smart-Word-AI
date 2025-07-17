 import React, { useState, useEffect, createContext, useContext } from 'react';

// 1. Create the context with a default value.
const ThemeContext = createContext();

// 2. Create the provider component.
// This component will wrap our application and provide the theme state to all children.
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme ('light' or 'dark').
  // It checks localStorage first for a saved preference, defaulting to 'light'.
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // useEffect to apply the theme to the document body.
  // This runs whenever the 'theme' state changes.
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    // Add or remove the 'dark' class on the <html> element.
    root.classList.toggle('dark', isDark);

    // Save the current theme preference to localStorage.
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Provide the theme state and toggle function to children.
  // The 'value' object will be accessible by any component within this provider.
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Create a custom hook for easy consumption of the context.
// This simplifies accessing the theme state in other components.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
