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
      className="search-bar w-2/3 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-600"
    />
  );
};

export default SearchBar;