import React from 'react';
import {formatDistanceToNow} from 'date-fns';
import './task.css';

const createDate = new Date();

const Task = ({text}) => {

  return (
    <li>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
        />
        <label>
          <span className="description">{text}</span>
          <span className="created">{formatDistanceToNow(createDate)}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  )
}

export default Task;