import React, { useState } from 'react';

// Sample data for the topics. This would eventually come from an API.
const topics = [
    { name: 'Faith', description: 'Explore verses about belief, trust, and confidence in God.', emoji: '🙏' },
    { name: 'Love', description: 'Discover the different facets of love as described in the Bible.', emoji: '❤️' },
    { name: 'Forgiveness', description: 'Learn about the importance of forgiveness and reconciliation.', emoji: '🕊️' },
    { name: 'Hope', description: 'Find encouragement and promises for the future.', emoji: '✨' },
    { name: 'Strength', description: 'Verses about finding strength in God during difficult times.', emoji: '💪' },
    { name: 'Peace', description: 'Read about the peace that comes from a relationship with God.', emoji: '☮️' },
    { name: 'Prayer', description: 'Learn about the power and practice of communicating with God.', emoji: '🙌' },
    { name: 'Salvation', description: 'Understand the core message of salvation through Jesus Christ.', emoji: '✝️' },
];

// A reusable card component for displaying a single topic.
const TopicCard = ({ topic }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300 border-b-4 border-transparent hover:border-linkedin-blue">
        <div className="text-5xl mb-4">{topic.emoji}</div>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{topic.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">{topic.description}</p>
        <button className="mt-4 px-4 py-2 bg-linkedin-blue text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Explore Topic
        </button>
    </div>
);

const TopicsPage = () => {
    // State to hold the user's search query
    const [searchTerm, setSearchTerm] = useState('');

    // Filter topics based on the search term.
    // It checks both the topic name and description.
    const filteredTopics = topics.filter(topic =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    Explore by <span className="text-linkedin-blue">Topic</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Discover what the Bible says about subjects that matter to you. Select a topic to find relevant verses and insights.
                </p>
            </div>

            {/* --- Search Bar --- */}
            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a topic (e.g., 'Faith', 'Love')..."
                    className="w-full px-4 py-3 text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-linkedin-blue"
                />
            </div>

            {/* --- Topics Grid --- */}
            {filteredTopics.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredTopics.map(topic => (
                        <TopicCard key={topic.name} topic={topic} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500 dark:text-gray-400">No topics found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default TopicsPage;
