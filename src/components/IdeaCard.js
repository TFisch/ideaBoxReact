import React from 'react';
import './compontent-css/IdeaCard.css';

const IdeaCard = ({ name, description, id }) => (
  <div className="IdeaCard">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);

export default IdeaCard;
