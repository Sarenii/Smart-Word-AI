import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import BiblePage from './pages/BiblePage';
import TopicsPage from './pages/TopicsPage'; 
import TriviaPage from './pages/TriviaPage'; 
import AboutPage from './pages/AboutPage'; 
import CommunityPage from './pages/CommununityPage'; 


function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          
          {/* The Routes component will render the component that matches the current URL */}
          <Routes>
            {/* Route for the homepage */}
            <Route path="/" element={<MainContent />} />
            
            {/* Route for the Bible page */}
            <Route path="/bible" element={<BiblePage />} />

            {/* Route for the Topics page */}
            <Route path="/topics" element={<TopicsPage />} />

            {/* Route for the Trivia page */}
            <Route path="/trivia" element={<TriviaPage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/community" element={<CommunityPage />} />



            {/* You can add more routes here for Trivia, etc. later */}
          </Routes>
          
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
