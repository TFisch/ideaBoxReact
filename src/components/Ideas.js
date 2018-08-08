import React, { Component } from 'react';
import Input from './Input';

export default class Ideas extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {
          title: 'w',
          body: 'w'
        }
      ]
    };
  }
  render() {
    const { ideas } = this.state;
    return (
      <div>
        {ideas.map(idea => (
          <Input />
        ))}
      </div>
    );
  }
}
