import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

const NewTaskForm = ({ onCreateTask }) => {
  
  const [inputValue, setInputValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };

  function handleInputMinutes(event) {
    setMinutes(event.target.value);
  };

  function handleInputSeconds(event) {
    setSeconds(event.target.value);
  };

  function handleSubmitForm(event) {
    event.preventDefault();
    onCreateTask(inputValue, +minutes, +seconds);
    setInputValue('');
    setMinutes('');
    setSeconds('');
  };
  

    return (
      <form className="new-todo-form" onSubmit={handleSubmitForm}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleInputChange}
          value={inputValue}
          required
        />
        <input
          className="new-todo-form__timer"
          value={minutes}
          onChange={handleInputMinutes}
          required
          placeholder="Min"
        />
        <input
          className="new-todo-form__timer"
          value={seconds}
          onChange={handleInputSeconds}
          required
          placeholder="Sec"
        />
        <input className="new-todo-form__submit" type="submit" />
      </form>
    );
  
}

NewTaskForm.defaultProps = {
  onCreateTask: () => {},
};

NewTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};

export default NewTaskForm;
