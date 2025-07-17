import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import ThemeToggleButton from './ThemeToggleButton';

// --- Icon Components ---
const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated navLinks with correct paths for the router
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bible', href: '/bible' },
    { name: 'Topics', href: '/topics' }, // Placeholder paths for now
    { name: 'Community', href: '/community' },
    { name: 'Trivia', href: '/trivia' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* App Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              <Link to="/">SMART WORD <span className="text-linkedin-blue">AI</span></Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link // Use Link component here
                key={link.name}
                to={link.href}
                className="font-medium text-gray-500 dark:text-gray-300 hover:text-linkedin-blue dark:hover:text-linkedin-blue transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* Theme Toggle Button */}
            <div className="mr-4">
              <ThemeToggleButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-linkedin-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-linkedin-blue"
                aria-label="Open main menu"
              >
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" onClick={() => setIsMenuOpen(false)}>
            {navLinks.map((link) => (
              <Link // Use Link component here as well
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-linkedin-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
