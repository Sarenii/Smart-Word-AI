import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    // The header is sticky to keep it visible on scroll.
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* App Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            SMART WORD <span className="text-linkedin-blue">AI</span>
          </h1>
          
          {/* Theme Toggle Button */}
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
