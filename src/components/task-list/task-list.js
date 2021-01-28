import React from 'react';
import Task from '../task';

const TaskList = ({tasks, onChangeStatus, onDeleteTask}) => {

  const taskList = tasks.map(({text, id, active}) => {
    return (
      <Task 
        text={text}
        key={id}
        id={id}
        active={active}
        onChangeStatus={onChangeStatus} 
        onDeleteTask={onDeleteTask}
      />
    )
  })

  return (
    <ul className="todo-list">
      {taskList}
    </ul>
  )
}

export default TaskList;