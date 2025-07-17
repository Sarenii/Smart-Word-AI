import React from 'react';

// An icon for the call-to-action button to make it more visually appealing.
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);


const MainContent = () => {
  return (
    // 'flex-grow' ensures this component takes up available space, pushing the footer down.
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
      {/* --- Hero Section --- */}
      <div className="text-center py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          Unlock the Bible's <span className="text-linkedin-blue">Wisdom</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Explore scripture with AI-powered insights and a community of believers. Ask questions, get clear explanations, and discover personal meaning.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-linkedin-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin-blue dark:focus:ring-offset-gray-900 transition-transform transform hover:scale-105">
            <SearchIcon />
            Start Exploring
          </button>
        </div>
      </div>

      {/* --- Features/Content Section --- */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-linkedin-blue mb-2">Verse of the Day</h3>
                <blockquote className="text-gray-600 dark:text-gray-400 border-l-4 border-linkedin-blue pl-4 italic">
                  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
                  <cite className="block not-italic mt-2 text-sm">- John 3:16</cite>
                </blockquote>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-linkedin-blue mb-2">Getting Started</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the (upcoming) search bar to look up a verse or topic. The AI will provide context and explanations.
                </p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
