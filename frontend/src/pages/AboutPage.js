import React from 'react';

// An icon component for feature highlights
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-linkedin-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AboutPage = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            {/* --- Hero Section --- */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                    About <span className="text-linkedin-blue">SMART WORD AI</span>
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                    Bridging ancient scripture with modern technology to illuminate the path to understanding.
                </p>
            </div>

            {/* --- Mission and Vision Section --- */}
            <div className="py-12 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Our mission is to make the Bible more accessible, understandable, and relatable to everyone. We aim to break down barriers of complex language and historical distance by providing clear, AI-driven explanations and fostering a community where personal experiences with scripture can be shared and valued.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            We envision a world where anyone, regardless of their background, can engage deeply with the Bible. We see SMART WORD AI as a trusted companion on your spiritual journey, a tool that not only provides knowledge but also inspires faith, encourages reflection, and connects believers from all walks of life.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- How It Works Section --- */}
            <div className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                            We combine cutting-edge technology with the timeless power of community.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-start">
                                <CheckCircleIcon />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced AI</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">We utilize powerful language models to analyze scripture, providing you with contextual explanations, definitions, and cross-references in an instant.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-start">
                                <CheckCircleIcon />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community-Sourced Insights</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">The app allows users to share their personal testimonies and reflections on verses, creating a rich tapestry of shared wisdom and experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-start">
                                <CheckCircleIcon />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interactive Tools</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">From thematic explorations to engaging trivia, our tools are designed to make learning about the Bible an active and enjoyable experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

