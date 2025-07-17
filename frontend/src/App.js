import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    // 1. ThemeProvider wraps everything, making the theme available to all components.
    <ThemeProvider>
      {/* 2. This main div sets the global background and text colors.
             It's a flex column with min-height-screen to ensure the footer
             sticks to the bottom, even on pages with little content. */}
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* 3. Our main layout components are assembled here. */}
        <Header />
        <MainContent />
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;
