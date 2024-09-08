import React, { useState } from 'react';
import './App.css';
import LanguageList from './components/LanguageList';
import SearchBar from './components/SearchBar';
import languages from './languages';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Programming Languages Documentation</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <main>
        <LanguageList languages={filteredLanguages} />
      </main>
    </div>
  );
}

export default App;