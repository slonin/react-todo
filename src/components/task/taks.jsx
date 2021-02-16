import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

const Task = ({ text, isActive, id, created, onChangeStatus, onDeleteTask, currentFilter, isEditing, onToggleEditInput, timerValue, onEditTask }) => {

  const [newText, setNewText ] = useState(text);
  const [timerId, setTimerId] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  function handleInputChange(event) {
    setNewText(event.target.value);
  };

  function handleKeyDown(event) {
  
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      onEditTask(newText, id);
    }

    if (event.key === 'Escape') {
      onEditTask(newText, id);
    }
  };

  function tick() {
    // eslint-disable-next-line no-shadow
    setTotalTime(totalTime => totalTime - 1);
  };

  function runTick() {
    setTimerId(setInterval(tick, 1000));
  };

  useEffect(() => {
    setTotalTime(timerValue[0] * 60 + timerValue[1]);

    return () => clearInterval(timerId);
  }, [ timerValue, timerId ]);

  if (totalTime === 0 ) {
    clearInterval(timerId);
  }

  const min = totalTime / 60 < 10 ? `0${Math.floor(totalTime / 60)}` : Math.floor(totalTime / 60);
  const sec = totalTime % 60 < 10 ? `0${totalTime % 60}` : totalTime % 60;
  const timer = `${min}:${sec}`;

  let className = isActive ? '' : 'completed';
  className += `${isEditing ? ' editing' : ''}`;
  className += `${currentFilter === 'active' && !isActive ? ' hidden' : ''}`;
  className += `${currentFilter === 'completed' && isActive ? ' hidden' : ''}`;

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!isActive} onChange={() => onChangeStatus(id)} />
        <label>
          <span className="title">{text}</span>
          <span className="description">
            <button type="button" label="Run timer" className="icon icon-play" onClick={runTick} />
            <button type="button" label="Pause timer" className="icon icon-pause" onClick={() => clearInterval(timerId)} />
            <span className="timer-value">{timer}</span>
          </span>
          <span className="created">created {formatDistanceToNow(created, { includeSeconds: true })} ago</span>
        </label>
        <button label="Edit task" type="button" className="icon icon-edit" onClick={() => onToggleEditInput(id)} />
        <button label="Delete task" type="button" className="icon icon-destroy" onClick={() => onDeleteTask(id)} />
      </div>
      <input
        type="text"
        className="edit"
        value={newText}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
    </li>
  );
}


Task.defaultProps = {
  text: 'Неизвестная задача',
  isActive: true,
  id: Math.random() * 10000,
  created: new Date(),
  currentFilter: 'all',
  isEditing: false,
  timerValue: [],
  onChangeStatus: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
  onToggleEditInput: () => {},
};

Task.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  id: PropTypes.number,
  created: PropTypes.number,
  isEditing: PropTypes.bool,
  onChangeStatus: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
  currentFilter: PropTypes.string,
  onToggleEditInput: PropTypes.func,
  timerValue: PropTypes.arrayOf(PropTypes.number),
};
