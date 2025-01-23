import React from 'react';

const LanguageCard = ({ name, description, url, icon }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div className="language-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" onClick={handleClick}>
      <div className="language-icon mb-2 text-3xl">{icon}</div>
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-600">{description}</p>
    </div>
  );
};

export default LanguageCard;
