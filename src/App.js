import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission';
import IdeasList from './IdeasList';

class App extends Component {
  constructor() {
    super();

    this.state = { ideas: [] }
  }

  componentDidMount() {
    let ideasFromStorage = JSON.parse(localStorage.ideas);
    this.setState({ ideas: ideasFromStorage ? ideasFromStorage : [] });
  }

  addIdea(idea) {
    this.state.ideas.push(idea);
    localStorage.ideas = JSON.stringify(this.state.ideas);
    this.setState({ ideas: this.state.ideas });
  }

  render() {
    return (
      <div>
        <InputSubmission sendIdea={ this.addIdea.bind(this) }/>
        <IdeasList ideas={ this.state.ideas }/>
      </div>
    );
  }
}

export default App;
