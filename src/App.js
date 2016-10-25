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
    this.updateIdeas(this.state.ideas);
  }

  deleteIdea(id) {
    const storedIdeas = JSON.parse(localStorage.ideas);
    const keptIdeas = storedIdeas.filter((idea) => idea.id !== id);
    this.updateIdeas(keptIdeas);
  }

  updateIdeas(ideas) {
    localStorage.ideas = JSON.stringify(ideas);
    this.setState({ ideas: ideas });
  }

  render() {
    return (
      <div>
        <InputSubmission sendIdea={ this.addIdea.bind(this) }/>
        <IdeasList ideas={ this.state.ideas } handleDelete={ this.deleteIdea.bind(this) }/>
      </div>
    );
  }
}

export default App;
