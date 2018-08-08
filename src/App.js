import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import IdeasContainer from './components/IdeasContainer';

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
        <IdeasContainer ideas={this.state.ideas} />
      </div>
    );
  }
}

export default App;
