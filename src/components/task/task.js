import React from 'react';
import {formatDistanceToNow} from 'date-fns';
import './task.css';

const Task = ({text, active, id, created, onChangeStatus, onDeleteTask, filter}) => {

  let className = active ? '' : 'completed';
  className += `${filter === 'active' && !active ? ' hidden' : ''}`;
  className += `${filter === 'completed' && active ? 'hidden' : ''}`;
  
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
          <span className="created">{formatDistanceToNow(created)}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button 
          className="icon icon-destroy" 
          onClick={() => onDeleteTask(id)}
        ></button>
      </div>
    </li>
  )
}

export default Task;
