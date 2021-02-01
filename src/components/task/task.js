import React, { Component } from 'react';
import {formatDistanceToNow} from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

export default class Task extends Component {

  state = {
    newText: this.props.text,
  }

  handleInputChange = (e) => {
    this.setState({
      newText: e.target.value
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      this.props.onEditTextTask(e.target.value, this.props.id);
    }
  }

  render() {

    const {text, active, id, created, onChangeStatus, onDeleteTask, filter, editing, onEditTask} = this.props;

    let className = active ? '' : 'completed';
    className += `${editing ? ' editing' : ''}`
    className += `${filter === 'active' && !active ? ' hidden' : ''}`;
    className += `${filter === 'completed' && active ? ' hidden' : ''}`;

    return (
      <li className={className}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox"
            checked={active ? false : true} 
            onChange={() => onChangeStatus(id)}
          />
          <label>
            <span 
              className="description" 
              onClick={() => onChangeStatus(id)}
            >
              {text}
            </span>
            <span className="created">created {formatDistanceToNow(created, {includeSeconds : true})} ago</span>
          </label>
          <button className="icon icon-edit" onClick={() => onEditTask(id)}></button>
          <button 
            className="icon icon-destroy" 
            onClick={() => onDeleteTask(id)}
          ></button>
        </div>
        <input
          type="text"
          className="edit"
          value={this.state.newText}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInputChange}
        />
      </li>
    )
  }
}

Task.defaultProps = {
  text: 'Неизвестная задача',
  active: true,
  id: Math.random() * 10000,
  created: new Date(),
  filter: 'all',
  onChangeStatus: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {}
}

Task.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.number,
  created: PropTypes.object,
  onChangeStatus: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
  filter: PropTypes.string
}