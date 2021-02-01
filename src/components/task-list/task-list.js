import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import './task-list.css';

const TaskList = ({ tasks, onChangeStatus, onDeleteTask, filter, onToggleEditInput, onEditTask }) => {
  const taskList = tasks.map(({ text, id, active, created, editing }) => (
    <Task
      text={text}
      key={id}
      id={id}
      active={active}
      onChangeStatus={onChangeStatus}
      onDeleteTask={onDeleteTask}
      filter={filter}
      created={created}
      editing={editing}
      onToggleEditInput={onToggleEditInput}
      onEditTask={onEditTask}
    />
  ));

  return <ul className="todo-list">{taskList}</ul>;
};

TaskList.defaultProps = {
  onChangeStatus: () => {},
  onDeleteTask: () => {},
  onToggleEditInput: () => {},
  onEditTask: () => {},
  filter: 'all',
  tasks: [],
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onChangeStatus: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onToggleEditInput: PropTypes.func,
  filter: PropTypes.string,
};

export default TaskList;
