import React from 'react';
import {formatDistanceToNow} from 'date-fns';
import './task.css';

const createDate = new Date();

const Task = ({text, active, id, onChangeStatus, onDeleteTask}) => {

  return (
    <li className={active ? 'completed' : ''} >
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox"
          checked={active ? true : false}
          onClick={() => onChangeStatus(id)}
        />
        <label>
          <span 
            className="description" 
            onClick={() => onChangeStatus(id)}
          >
            {text}
          </span>
          <span className="created">{formatDistanceToNow(createDate)}</span>
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