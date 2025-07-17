import React from 'react';

// --- Icon Components for the features section ---
// I've updated the icon text color to be linkedin-blue to stand out on the new card background.
const AiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const TopicsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
);

const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const TriviaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const BibleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);


// A reusable card component for the features section.
const FeatureCard = ({ icon, title, children }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-left shadow-lg transform hover:-translate-y-1 transition-transform duration-300 border-b-4 border-transparent hover:border-linkedin-blue">
        <div className="mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{children}</p>
    </div>
);


const MainContent = () => {
  return (
    <main className="flex-grow">
      {/* --- Hero Section --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          Unlock the Bible's <span className="text-linkedin-blue">Wisdom</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Explore scripture with AI-powered insights and a community of believers. Ask questions, get clear explanations, and discover personal meaning.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-linkedin-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin-blue dark:focus:ring-offset-gray-900 transition-transform transform hover:scale-105">
            Start Exploring
          </button>
        </div>
      </div>

      {/* --- Features Section --- */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">A New Way to Study</h2>
                <p className="mt-4 text-md text-gray-600 dark:text-gray-400">SMART WORD AI combines technology and community to enrich your understanding of the scriptures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard icon={<BibleIcon />} title="Read the Bible">
                    Access multiple versions of the Bible. Read, compare, and search the complete text of scripture.
                </FeatureCard>
                <FeatureCard icon={<AiIcon />} title="AI-Powered Study">
                    Get instant, clear explanations for any verse or passage. Understand historical context, key terms, and more.
                </FeatureCard>
                <FeatureCard icon={<TopicsIcon />} title="Thematic Exploration">
                    Select topics like 'Faith', 'Forgiveness', or 'Leadership' and receive curated verses and study guides.
                </FeatureCard>
                <FeatureCard icon={<CommunityIcon />} title="Community Wisdom">
                    Read and share personal testimonies and insights connected to specific verses. Learn from the experiences of others.
                </FeatureCard>
                <FeatureCard icon={<TriviaIcon />} title="Test Your Knowledge">
                    Engage with fun and challenging Bible trivia to sharpen your memory and learn new facts in an enjoyable way.
                </FeatureCard>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
