import React, { Component } from 'react';
import './InputSubmission.css';

class InputSubmission extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: ''
    }
  }

  handleClick() {
    this.props.sendIdea(Object.assign(this.state, { id: Date.now() }));
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className='InputSubmissionForm'>
        <input
          type='text'
          placeholder='What needs done?'
          value={ this.state.title }
          onChange={ (e) => this.setState({ title: e.target.value }) }
        />
        <textarea
          placeholder='Description of task...'
          value={ this.state.body }
          onChange={ (e) => this.setState({ body: e.target.value }) }
        />
        <button onClick={ () => this.handleClick() }>
          Submit
        </button>
      </div>
    );
  }
}

export default InputSubmission;
