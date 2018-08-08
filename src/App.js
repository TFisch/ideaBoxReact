import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }
  addIdea = idea => {
    const { titleInput, bodyInput } = idea;
    const newIdea = { titleInput, bodyInput, id: Date.now() };
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  };

  render() {
    return (
      <div className="App">
        <Input addIdea={this.addIdea} />
      </div>
    );
  }
}

export default App;
