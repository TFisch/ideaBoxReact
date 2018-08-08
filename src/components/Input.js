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
        <input className="idea-title entry input-box" type="text" />
        <input className="idea-body entry input-box" type="text" />
        <button className="save-button entry">save</button>
      </div>
    );
  }
}
