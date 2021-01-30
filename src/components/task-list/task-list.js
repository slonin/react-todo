import React from 'react';
import Task from '../task';

const TaskList = ({tasks, onChangeStatus, onDeleteTask, filter}) => {

  const taskList = tasks.map(({text, id, active, created}) => {
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