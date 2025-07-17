import React, { useState } from 'react';

// Sample data for community stories. This would come from your database.
const stories = [
    {
        id: 1,
        author: 'John D.',
        title: 'Finding Peace in the Storm',
        verse: 'Philippians 4:6-7',
        story: 'I was going through an incredibly stressful time at work, and I felt overwhelmed with anxiety. I remembered this verse and started to pray instead of worry. A sense of peace that I can\'t explain washed over me. It didn\'t change my circumstances immediately, but it changed my heart, and that made all the difference.'
    },
    {
        id: 2,
        author: 'Maria S.',
        title: 'Strength to Forgive',
        verse: 'Ephesians 4:32',
        story: 'Forgiving someone who hurt me deeply felt impossible. I held onto anger for years. Reading this verse over and over again reminded me of the forgiveness I have received. It was a long process, but meditating on this truth gave me the strength to finally let go and find freedom.'
    },
    {
        id: 3,
        author: 'David L.',
        title: 'A New Perspective on Love',
        verse: '1 Corinthians 13:4-7',
        story: 'I always thought of love as a feeling, but reading this chapter completely changed my perspective. It showed me that love is about action—patience, kindness, and selflessness. It\'s become a guide for how I try to treat my family and friends every day.'
    },
];

// A reusable card component for displaying a single story.
const StoryCard = ({ story }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">{story.title}</h3>
        <p className="text-sm font-semibold text-linkedin-blue mb-3">{story.verse}</p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">"{story.story}"</p>
        <p className="text-right text-gray-500 dark:text-gray-400 mt-4 italic">- {story.author}</p>
    </div>
);

// A modal component for submitting a new story.
const ShareStoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-lg m-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Share Your Story</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                        <input type="text" id="name" placeholder="e.g., John D." className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="verse" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Related Bible Verse</label>
                        <input type="text" id="verse" placeholder="e.g., John 3:16" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="story" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Story</label>
                        <textarea id="story" rows="5" placeholder="Share how this verse has impacted you..." className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue"></textarea>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500">Cancel</button>
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-linkedin-blue rounded-md hover:bg-blue-700">Share Story</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CommunityPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ShareStoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    Community <span className="text-linkedin-blue">Testimonies</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Read stories from others about how scripture has impacted their lives.
                </p>
            </div>

            <div className="text-center mb-12">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-linkedin-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin-blue dark:focus:ring-offset-gray-900 transition-transform transform hover:scale-105"
                >
                    Share Your Own Story
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map(story => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>
        </div>
    );
};

export default CommunityPage;
