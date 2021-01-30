import React, { Component } from 'react';

export default class NewTaskForm extends Component {

  state = {
    inputValue: ''
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      this.props.onCreateTask(e.target.value);
      this.setState({
        inputValue: ''
      })
    }


  }

  render() {
    return (
      <input 
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={this.handleKeyDown}
        onChange={this.handleInputChange}
        value={this.state.inputValue}
      />
    )
  }
}


