import React, { useState } from 'react';
import './App.css';
import LanguageList from './components/LanguageList';
import SearchBar from './components/SearchBar';
import languages from './languages';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">DocsGo</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <main>
        <h2 className="headings-left">General Purpose languages</h2>
        <LanguageList languages={filteredLanguages} />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2021 DocsGo. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <p>Creator Profile</p>
          <div className="social-media">
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
  );
}

export default App;