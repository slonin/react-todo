import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    const { onCreateTask } = this.props;
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      onCreateTask(event.target.value);
      this.setState({
        inputValue: '',
      });
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.handleKeyDown}
        onChange={this.handleInputChange}
        value={inputValue}
      />
    );
  }
}

NewTaskForm.defaultProps = {
  onCreateTask: () => {},
};

NewTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};
