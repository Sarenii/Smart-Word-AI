import React, { useState, useEffect, useCallback, useRef } from 'react';

// A reusable loading spinner component
const Spinner = () => (
    <div className="flex justify-center items-center p-8">
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-linkedin-blue"></div>
    </div>
);

// The advanced, fully searchable and custom-styled dropdown component
const SearchableSelector = ({ label, options, selectedId, onSelect, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);

    const selectedOption = options.find(option => option.id === selectedId);
    const displayValue = selectedOption ? (selectedOption.name || selectedOption.number) : '';

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const filteredOptions = options.filter(option =>
        (option.name || option.number).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <div className="flex-1 relative" ref={wrapperRef}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={disabled}
                className="relative w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-linkedin-blue focus:border-linkedin-blue sm:text-sm disabled:opacity-50"
            >
                <span className="block truncate text-gray-900 dark:text-gray-100">{displayValue || `Select ${label}`}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-linkedin-blue dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                    {filteredOptions.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 dark:text-gray-100 hover:bg-linkedin-blue hover:text-white"
                        >
                            <span className="font-normal block truncate">{option.name || option.number}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


const BiblePage = () => {
    // State for API data
    const [versions, setVersions] = useState([]);
    const [books, setBooks] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [passage, setPassage] = useState(null);
    const [nextChapter, setNextChapter] = useState(null);
    const [previousChapter, setPreviousChapter] = useState(null);

    // State for user selections
    const [selectedVersion, setSelectedVersion] = useState('de4e12af7f28f599-01'); // Default to KJV
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');

    // State for UI management
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_BIBLE_API_KEY;

    // --- Standalone Fetching Functions ---
    const fetchPassage = useCallback(async (versionId, chapterId) => {
        if (!chapterId || !apiKey) return;
        setIsLoading(true);
        setPassage(null); setNextChapter(null); setPreviousChapter(null);
        try {
            const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${versionId}/chapters/${chapterId}?content-type=html`, { headers: { 'api-key': apiKey } });
            const data = await response.json();
            setPassage(data.data);
            setNextChapter(data.data.next);
            setPreviousChapter(data.data.previous);
        } catch (err) { setError(err); } 
        finally { setIsLoading(false); }
    }, [apiKey]);

    // --- Event Handlers ---
    const handleChapterSelect = async (chapter) => {
        setSelectedChapter(chapter.id);
        await fetchPassage(selectedVersion, chapter.id);
    };

    const handleBookSelect = async (book) => {
        setSelectedBook(book.id);
        // Reset chapter and passage when a new book is selected
        setSelectedChapter('');
        setPassage(null);
        setNextChapter(null);
        setPreviousChapter(null);
        
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${selectedVersion}/books/${book.id}/chapters`, { headers: { 'api-key': apiKey } });
            const data = await response.json();
            if (data.data && Array.isArray(data.data)) {
                setChapters(data.data.map(c => ({ id: c.id, number: c.number })));
            } else {
                setChapters([]);
            }
        } catch (err) { setError(err); } 
        finally { setIsLoading(false); }
    };

    const handleVersionSelect = async (version) => {
        const newVersionId = version.id;
        const currentBookId = selectedBook;
        const currentChapterNumber = chapters.find(c => c.id === selectedChapter)?.number;

        setSelectedVersion(newVersionId);
        // Clear all downstream data to prepare for reload
        setBooks([]); setChapters([]); setPassage(null);
        setNextChapter(null); setPreviousChapter(null);
        setIsLoading(true);

        try {
            // 1. Fetch books for the new version
            const booksRes = await fetch(`https://api.scripture.api.bible/v1/bibles/${newVersionId}/books`, { headers: { 'api-key': apiKey } });
            const booksData = await booksRes.json();
            const newBooks = (booksData.data && Array.isArray(booksData.data)) ? booksData.data.map(b => ({ id: b.id, name: b.name })) : [];
            setBooks(newBooks);

            // 2. Check if the previously selected book exists in the new version
            const bookMatch = newBooks.find(b => b.id === currentBookId);
            if (bookMatch) {
                setSelectedBook(bookMatch.id);
                // 3. If book exists, fetch its chapters
                const chaptersRes = await fetch(`https://api.scripture.api.bible/v1/bibles/${newVersionId}/books/${bookMatch.id}/chapters`, { headers: { 'api-key': apiKey } });
                const chaptersData = await chaptersRes.json();
                const newChapters = (chaptersData.data && Array.isArray(chaptersData.data)) ? chaptersData.data.map(c => ({ id: c.id, number: c.number })) : [];
                setChapters(newChapters);
                
                // 4. Check if the previously selected chapter number exists in the new list
                const chapterMatch = newChapters.find(c => c.number === currentChapterNumber);
                if (chapterMatch) {
                    setSelectedChapter(chapterMatch.id);
                    // 5. If chapter also exists, fetch the passage
                    await fetchPassage(newVersionId, chapterMatch.id);
                } else {
                    setSelectedChapter('');
                    setIsLoading(false);
                }
            } else {
                // If book doesn't exist, clear selections
                setSelectedBook('');
                setSelectedChapter('');
                setIsLoading(false);
            }
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    const handleChapterNavigation = (chapter) => {
        if (!chapter) return;
        // The chapter object from next/previous already has the id we need
        setSelectedChapter(chapter.id);
        fetchPassage(selectedVersion, chapter.id);
        window.scrollTo(0, 0);
    };

    // --- Initial Data Load ---
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!apiKey) {
                setError(new Error("API Key is missing."));
                return;
            };
            setIsLoading(true);
            try {
                const versionsRes = await fetch('https://api.scripture.api.bible/v1/bibles?language=eng', { headers: { 'api-key': apiKey } });
                const versionsData = await versionsRes.json();
                if (versionsData.data && Array.isArray(versionsData.data)) {
                    setVersions(versionsData.data.map(v => ({ id: v.id, name: v.name })));
                }

                const booksRes = await fetch(`https://api.scripture.api.bible/v1/bibles/${selectedVersion}/books`, { headers: { 'api-key': apiKey } });
                const booksData = await booksRes.json();
                if (booksData.data && Array.isArray(booksData.data)) {
                    setBooks(booksData.data.map(b => ({ id: b.id, name: b.name })));
                }
            } catch (err) { setError(err); } 
            finally { setIsLoading(false); }
        };
        fetchInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey]);


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Read the Bible</h2>

                <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <SearchableSelector label="Version" options={versions} selectedId={selectedVersion} onSelect={handleVersionSelect} />
                    <SearchableSelector label="Book" options={books} selectedId={selectedBook} onSelect={handleBookSelect} disabled={!books.length} />
                    <SearchableSelector label="Chapter" options={chapters} selectedId={selectedChapter} onSelect={handleChapterSelect} disabled={!chapters.length} />
                </div>

                {isLoading && <Spinner />}
                {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert"><p>{error.message}</p></div>}
                
                {passage ? (
                    <>
                        <style>{`
                            .passage-content .v-num {
                                font-weight: 700;
                                color: #0A66C2;
                                font-size: 0.7em;
                                vertical-align: super;
                                padding-right: 0.2rem;
                            }
                            .passage-content .p {
                                margin-bottom: 1rem;
                            }
                        `}</style>
                        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed mt-4 passage-content">
                            <h3 className="text-2xl font-semibold text-linkedin-blue">{passage.reference}</h3>
                            <div dangerouslySetInnerHTML={{ __html: passage.content }} />
                        </div>

                        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => handleChapterNavigation(previousChapter)}
                                disabled={!previousChapter}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                &larr; Previous Chapter
                            </button>
                            <button
                                onClick={() => handleChapterNavigation(nextChapter)}
                                disabled={!nextChapter}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next Chapter &rarr;
                            </button>
                        </div>
                    </>
                ) : (
                    !isLoading && <p className="text-center text-gray-500 dark:text-gray-400 py-8">Please make a selection to view a chapter.</p>
                )}
            </div>
        </div>
    );
};

export default BiblePage;
