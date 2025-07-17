import React from 'react';

// Sample data for the trivia categories.
const triviaCategories = [
    { name: 'General Trivia', description: 'A mix of questions from all over the Bible, covering various topics and stories.', emoji: '🌍' },
    { name: 'Book Trivia', description: 'Test your knowledge on specific books of the Bible, from Genesis to Revelation.', emoji: '📚' },
    { name: 'Chapter Trivia', description: 'Focus on the details of individual chapters. How well do you know them?', emoji: '📖' },
    { name: 'Person Trivia', description: 'Questions about the key figures in the Bible, from prophets to kings.', emoji: '👥' },
    { name: 'Section Trivia', description: 'Explore questions about specific sections like the Law, the Gospels, or the Epistles.', emoji: '📜' },
];

// A reusable card component for displaying a single trivia category.
// The description is now always visible.
const TriviaCard = ({ category }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300 border-b-4 border-transparent hover:border-linkedin-blue">
        <div className="text-5xl mb-4">{category.emoji}</div>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{category.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow mb-4">
            {category.description}
        </p>
        <button className="mt-auto px-4 py-2 bg-linkedin-blue text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Start Trivia
        </button>
    </div>
);

const TriviaPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    Test Your <span className="text-linkedin-blue">Knowledge</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Challenge yourself with fun trivia from different parts of the Bible. Choose a category to begin!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {triviaCategories.map(category => (
                    <TriviaCard key={category.name} category={category} />
                ))}
            </div>
        </div>
    );
};

export default TriviaPage;
