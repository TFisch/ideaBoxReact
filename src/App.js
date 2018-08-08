import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  
  addIdea = idea => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]\
    this.setState({ ideas })
  }
  
  
  
  
  render() {
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

export default App;
