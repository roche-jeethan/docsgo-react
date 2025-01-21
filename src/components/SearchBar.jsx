// src/components/SearchBar.jsx
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
      className="search-bar w-1/2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
    />
  );
};

export default SearchBar;