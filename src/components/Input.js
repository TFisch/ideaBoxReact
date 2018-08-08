import React, { Component } from 'react';
import './compontent-css/Input.css';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      titleInput: '',
      bodyInput: ''
    };
  }

  render() {
    return (
      <div className="user-input-wrap">
        <input className="idea-title" type="text" />
        <input className="idea-body" type="text" />
        <button>save</button>
      </div>
    );
  }
}
