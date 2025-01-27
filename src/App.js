// filepath: /src/App.js
import React, { useState } from 'react';
import './index.css';
import LanguageList from './components/LanguageList';
import SearchBar from './components/SearchBar';
import { general, web, mobile, mlds } from './languages';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { GrInfo } from 'react-icons/gr';
import iconLight from './assets/logo-light.png';
import iconDark from './assets/logo-dark.png';

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
        <nav className="w-full px-4 sm:px-8 flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img src={ darkMode ? iconLight : iconDark } alt="DocsGo Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-semibold">DocsGo</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
              <GrInfo title="About DocsGo" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded ml-4">
              {darkMode ? <FaSun title="Switch to Light Mode" /> : <FaMoon title="Switch to Dark Mode" />}
            </button>
          </div>
        </nav>
        <div>
          <h1 className="text-6xl font-bold text-center mt-10">Welcome to DocsGo</h1>
          <p className="text-xl font-italic text-center m-10">All documentations at one place, with one click!</p>
        </div>
        <div className="flex justify-center mb-10">
            <SearchBar title="Search Bar" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <main className="p-4 sm:px-8">
          <h2 className="text-2xl font-semibold">General Purpose languages</h2>
          <LanguageList languages={generalFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Web Development languages</h2>
          <LanguageList languages={webFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Mobile Development languages</h2>
          <LanguageList languages={mobileFilteredLanguages} />
          <h2 className="text-2xl font-semibold">Machine Learning and Data Science languages</h2>
          <LanguageList languages={mldsFilteredLanguages} />
        </main>
        <footer className="p-4 sm:px-8">
          <div className="flex flex-col items-center justify-center">
            <p>© 2025 DocsGo. All rights reserved.</p>
            <div className="flex items-center space-x-4 m-4">
              <p className="mr-4">Contact for improvements!</p>
              <address><a href="mailto:jeethanroche@gmail.com"> <MdEmail/> </a></address>
            </div>
            <p className="mb-4">Creator's Profile</p>
            {/* eslint-disable-next-line */}
            <div className="flex space-x-4">
              <a className="w-5 h-5" href="https://x.com/RocheJeethan" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a className="w-5 h-5" href="https://github.com/roche-jeethan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="w-5 h-5" href="https://www.linkedin.com/in/roche-jeethan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a className="w-5 h-5" href="https://www.instagram.com/roche_jeethan/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a className="w-5 h-5" href="https://www.discordapp.com/users/1146725860276183040" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;