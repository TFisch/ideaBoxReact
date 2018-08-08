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
    this.props.addIdea(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { titleInput, bodyInput } = this.state;
    return (
      <div className="user-input-wrap">
        <h2>Ideabox</h2>
        <input
          className="idea-title entry input-box"
          name="titleInput"
          type="text"
          onChange={this.handleChange}
          value={titleInput}
        />
        <textarea
          className="idea-body entry input-box"
          name="bodyInput"
          type="text"
          onChange={this.handleChange}
          value={bodyInput}
        />
        <button className="save-button entry" onClick={() => this.onSubmit()}>
          save
        </button>
      </div>
    );
  }
}
