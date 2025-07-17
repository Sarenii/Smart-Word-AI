import React from 'react';

const Footer = () => {
  return (
    // The inner shadow gives it a nice separation from the main content.
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} SMART WORD AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
