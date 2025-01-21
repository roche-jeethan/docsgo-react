// src/components/LanguageList.js
import React from 'react';
import LanguageCard from './LanguageCard';

const LanguageList = ({ languages }) => {
  return (
    <div className="language-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {languages.map((language, index) => (
        <LanguageCard key={index} {...language} />
      ))}
    </div>
  );
};

export default LanguageList;