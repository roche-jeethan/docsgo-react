// filepath: /src/App.js
import React, { useState } from 'react';
import './index.css';
import LanguageList from './components/LanguageList';
import SearchBar from './components/SearchBar';
import { general, web, mobile, mlds } from './languages';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const generalFilteredLanguages = general.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const webFilteredLanguages = web.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const mobileFilteredLanguages = mobile.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const mldsFilteredLanguages = mlds.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <header className="p-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold">DocsGo</h1>
          <div className="w-full max-w-md flex items-center justify-center mt-4">
            <div className="flex-grow">
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded ml-4"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>
        <main className="p-4">
          <h2 className="text-2xl font-semibold">General Purpose languages</h2>
          <LanguageList languages={generalFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Web Development languages</h2>
          <LanguageList languages={webFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Mobile Development languages</h2>
          <LanguageList languages={mobileFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Machine Learning and Data Science languages</h2>
          <LanguageList languages={mldsFilteredLanguages} />
        </main>
        <footer className="p-4">
          <div className="flex flex-col items-center">
            <p>© 2025 DocsGo. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="/privacy_policy" className="hover:underline">Privacy Policy</a>
              <a href="/terms_of_service" className="hover:underline">Terms of Service</a>
              <a href="/contact_us" className="hover:underline">Contact Us</a>
            </div>
            <p>Creator Profile</p>
            <div className="flex space-x-4">
              <a href="https://x.com/RocheJeethan" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://github.com/roche-jeethan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/roche-jeethan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/roche_jeethan/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;