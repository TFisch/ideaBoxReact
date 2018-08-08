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

  onSubmit = e => {
    console.log(this.state);
  };

  handleTitleChange = e => {
    this.setState({ titleInput: e.target.value });
  };

  handleBodyChange = e => {
    this.setState({ bodyInput: e.target.value });
  };

  render() {
    const { titleInput, bodyInput } = this.state;
    return (
      <div className="user-input-wrap">
        <h2>Ideabox</h2>
        <input
          className="idea-title entry input-box"
          name="title"
          type="text"
          onChange={e => this.handleTitleChange(e)}
          value={titleInput}
        />
        <input
          className="idea-body entry input-box"
          name="body"
          type="text"
          onChange={e => this.handleBodyChange(e)}
          value={bodyInput}
        />
        <button className="save-button entry" onClick={() => this.onSubmit()}>
          save
        </button>
      </div>
    );
  }
}
