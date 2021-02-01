import React from 'react';
import Task from '../task';
import PropTypes from 'prop-types';
import './task-list.css';

const TaskList = ({tasks, onChangeStatus, onDeleteTask, filter, onEditTask, onEditTextTask}) => {

  const taskList = tasks.map(({text, id, active, created, editing}) => {
    return (
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
        onEditTask={onEditTask}
        onEditTextTask={onEditTextTask}
      />
    )
  })

  return (
    <ul className="todo-list">
      {taskList}
    </ul>
  )
}

TaskList.defaultProps = {
  onChangeStatus: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
  onEditTexTask: () => {},
  filter: 'all',
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onChangeStatus: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTextTask: PropTypes.func,
  filter: PropTypes.string,
}

export default TaskList;