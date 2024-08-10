// StatsCard.js
import React from 'react';
import '../styles/StatsCard.css';

const StatsCard = ({ title, subtitle }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default StatsCard;
