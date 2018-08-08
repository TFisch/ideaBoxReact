import React from 'react';
import './compontent-css/IdeaCard.css';

const IdeaCard = ({ titleInput, bodyInput, id }) => (
  <div className="IdeaCard">
    <h3 className="title">{titleInput}</h3>
    <p className="body">{bodyInput}</p>
  </div>
);

export default IdeaCard;
