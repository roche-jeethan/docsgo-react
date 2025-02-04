import React, { useState } from "react";
import LanguageList from '../components/LanguageList';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { general, web, mobile, mlds } from '../languages';

function Home() {
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
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
            <Footer />
          </div>
        </div>
    );
  }

export default Home;