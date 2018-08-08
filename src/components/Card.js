import React, { Component } from 'react';
import { Input } from './Input';

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  addIdea(titleInput, bodyInput) {
    console.log(titleInput, bodyInput);
  }
  render() {
    return (
      <div className="card-container">
        <Input />
      </div>
    );
  }
}
