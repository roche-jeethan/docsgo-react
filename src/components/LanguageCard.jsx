// src/components/LanguageCard.js
import React from 'react';

const LanguageCard = ({ name, description, url, icon }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="language-card" onClick={handleClick}>
      <div className="language-icon">{icon}</div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LanguageCard;