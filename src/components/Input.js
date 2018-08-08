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
        <h2>Ideabox</h2>
        <input className="idea-title entry" type="text" />
        <input className="idea-body entry" type="text" />
        <button>save</button>
      </div>
    );
  }
}
