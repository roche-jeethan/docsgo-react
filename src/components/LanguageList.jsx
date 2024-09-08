// src/components/LanguageList.js
import React from 'react';
import LanguageCard from './LanguageCard';

const LanguageList = ({ languages }) => {
  return (
    <div className="language-list">
      {languages.map((language, index) => (
        <LanguageCard key={index} {...language} />
      ))}
    </div>
  );
};

export default LanguageList;