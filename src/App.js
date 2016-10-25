import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';

class App extends Component {
  constructor() {
    super();

    this.state = { ideas: [] }
  }

  addIdea(idea) {
    this.state.ideas.push(idea);
    this.setState({ ideas: this.state.ideas });
  }

  render() {
    return (
      <div>
        <InputSubmission sendIdea={ this.addIdea.bind(this) }/>
      </div>
    );
  }
}

export default App;
