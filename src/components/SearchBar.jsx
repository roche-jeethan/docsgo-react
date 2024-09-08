// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a language..."
      value={searchQuery}
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;