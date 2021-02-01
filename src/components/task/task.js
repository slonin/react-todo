import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

export default class Task extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    newText: this.props.text,
  };

  handleInputChange = (event) => {
    this.setState({
      newText: event.target.value,
    });
  };

  handleKeyDown = (event) => {
    const { onEditTask, id, text } = this.props;
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      onEditTask(event.target.value, id);
    }

    if (event.key === 'Escape') {
      onEditTask(text, id);
    }
  };

  render() {
    const { newText } = this.state;
    const { text, active, id, created, onChangeStatus, onDeleteTask, filter, editing, onToggleEditInput } = this.props;

    let className = active ? '' : 'completed';
    className += `${editing ? ' editing' : ''}`;
    className += `${filter === 'active' && !active ? ' hidden' : ''}`;
    className += `${filter === 'completed' && active ? ' hidden' : ''}`;

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!active} onChange={() => onChangeStatus(id)} />
          <label>
            <span className="description">{text}</span>
            <span className="created">created {formatDistanceToNow(created, { includeSeconds: true })} ago</span>
          </label>
          <button label="Edit task" type="button" className="icon icon-edit" onClick={() => onToggleEditInput(id)} />
          <button label="Delete task" type="button" className="icon icon-destroy" onClick={() => onDeleteTask(id)} />
        </div>
        <input
          type="text"
          className="edit"
          value={newText}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInputChange}
        />
      </li>
    );
  }
}

Task.defaultProps = {
  text: 'Неизвестная задача',
  active: true,
  id: Math.random() * 10000,
  created: new Date(),
  filter: 'all',
  editing: false,
  onChangeStatus: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
  onToggleEditInput: () => {},
};

Task.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.number,
  created: PropTypes.number,
  editing: PropTypes.bool,
  onChangeStatus: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
  filter: PropTypes.string,
  onToggleEditInput: PropTypes.func,
};
