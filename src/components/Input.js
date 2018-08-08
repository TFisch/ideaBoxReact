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

  handleTitleChange(e) {
    this.setState({ titleInput: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ bodyInput: e.target.value });
  }

  render() {
    return (
      <div className="user-input-wrap">
        <h2>Ideabox</h2>
        <input
          className="idea-title entry input-box"
          type="text"
          onChange={e => this.handleTitleChange(e)}
        />
        <input
          className="idea-body entry input-box"
          type="text"
          onChange={e => this.handleBodyChange(e)}
        />
        <button
          className="save-button entry"
          onClick={() =>
            this.props.addIdea(this.state.titleInput, this.state.bodyInput)
          }
        >
          save
        </button>
      </div>
    );
  }
}
