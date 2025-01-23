// filepath: /src/App.js
import React, { useState } from 'react';
import './index.css';
import LanguageList from './components/LanguageList';
import SearchBar from './components/SearchBar';
import { general, web, mobile, mlds } from './languages';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa6';


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
      <div className={`min-h-screen bg-cover ${darkMode ? 'bg-dark-theme' : 'bg-light-theme'} text-black dark:text-white`}>
        <nav className="w-1/2 mx-auto flex justify-between items-center py-4">
          <nav className="sticky top-0 z-10 mx-auto max-w-5xl rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:bg-gray-900"></nav>
          <div className="flex items-center space-x-4">
            <SearchBar title="Search Bar" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
                <option className="text-gray-800 dark:text-gray-200">Categories</option>
                <option className="text-gray-800 dark:text-gray-200">General</option>
                <option className="text-gray-800 dark:text-gray-200">Web</option>
                <option className="text-gray-800 dark:text-gray-200">Mobile</option>
                <option className="text-gray-800 dark:text-gray-200">ML & DS</option>
              </select>
            </div>
            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded">About</button>
            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded">Who Made This</button>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded ml-4"
            >
              {darkMode ? <FaSun title="Switch to Light Mode" /> : <FaMoon title="Switch to Dark Mode" />}
            </button>
          </div>
        </nav>
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
                <FaXTwitter />
              </a>
              <a href="https://github.com/roche-jeethan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/roche-jeethan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
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